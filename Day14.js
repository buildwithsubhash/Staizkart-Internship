// =========================
// API
// =========================

const API_URL =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=";


// =========================
// DOM Elements
// =========================

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const recipeContainer =
    document.getElementById("recipeContainer");

const statusText =
    document.getElementById("status");

const recipeModal =
    document.getElementById("recipeModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");


// =========================
// Search Recipes
// =========================

async function searchRecipes(searchTerm) {

    statusText.textContent = "Searching recipes...";

    recipeContainer.innerHTML = "";

    try {

        const response =
            await fetch(API_URL + searchTerm);

        const data =
            await response.json();


        if (!data.meals) {

            statusText.textContent =
                "No recipes found. Try another search.";

            return;
        }


        statusText.textContent =
            `${data.meals.length} recipe(s) found.`;

        displayRecipes(data.meals);

    }

    catch (error) {

        console.error(error);

        statusText.textContent =
            "Something went wrong. Please try again.";
    }
}


// =========================
// Display Recipes
// =========================

function displayRecipes(recipes) {

    recipeContainer.innerHTML = "";

    recipes.forEach(function(recipe) {

        const card =
            document.createElement("div");

        card.classList.add("recipe-card");


        card.innerHTML = `

            <img
                src="${recipe.strMealThumb}"
                alt="${recipe.strMeal}"
            >

            <div class="recipe-info">

                <h3>
                    ${recipe.strMeal}
                </h3>

                <p>
                    Category: ${recipe.strCategory || "N/A"}
                </p>

                <p>
                    Cuisine: ${recipe.strArea || "N/A"}
                </p>

                <button
                    class="view-btn"
                    onclick="showRecipeDetails('${recipe.idMeal}')"
                >
                    View Recipe
                </button>

            </div>
        `;


        recipeContainer.appendChild(card);
    });
}


// =========================
// Show Recipe Details
// =========================

async function showRecipeDetails(recipeId) {

    try {

        const response =
            await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
            );

        const data =
            await response.json();

        const recipe =
            data.meals[0];


        // Create ingredients list

        let ingredientsHTML = "";


        for (let i = 1; i <= 20; i++) {

            const ingredient =
                recipe[`strIngredient${i}`];

            const measure =
                recipe[`strMeasure${i}`];


            if (
                ingredient &&
                ingredient.trim() !== ""
            ) {

                ingredientsHTML += `
                    <li>
                        ${measure || ""} ${ingredient}
                    </li>
                `;
            }
        }


        // Display modal

        modalContent.innerHTML = `

            <img
                src="${recipe.strMealThumb}"
                alt="${recipe.strMeal}"
            >

            <h2>
                ${recipe.strMeal}
            </h2>

            <p>
                <strong>Category:</strong>
                ${recipe.strCategory || "N/A"}
            </p>

            <p>
                <strong>Cuisine:</strong>
                ${recipe.strArea || "N/A"}
            </p>


            <h3>🧂 Ingredients</h3>

            <ul>
                ${ingredientsHTML}
            </ul>


            <h3>📖 Instructions</h3>

            <p>
                ${recipe.strInstructions}
            </p>

            ${
                recipe.strYoutube
                ?
                `
                <p style="margin-top: 20px;">
                    <a
                        href="${recipe.strYoutube}"
                        target="_blank"
                    >
                        ▶ Watch Recipe Video
                    </a>
                </p>
                `
                :
                ""
            }

        `;


        recipeModal.style.display = "block";

    }

    catch (error) {

        console.error(error);

        alert(
            "Unable to load recipe details."
        );
    }
}


// =========================
// Search Form Event
// =========================

searchForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const searchTerm =
            searchInput.value.trim();


        if (searchTerm === "") {
            return;
        }


        searchRecipes(searchTerm);
    }
);


// =========================
// Close Modal
// =========================

closeModal.addEventListener(
    "click",
    function() {

        recipeModal.style.display = "none";
    }
);


// Close modal when clicking outside

window.addEventListener(
    "click",
    function(event) {

        if (event.target === recipeModal) {

            recipeModal.style.display = "none";
        }
    }
);


// =========================
// Load Default Recipes
// =========================

searchRecipes("chicken");