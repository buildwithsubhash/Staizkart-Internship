
// ==========================================
// DAY 8 - FUNCTIONS, ARRAYS & OBJECTS
// ==========================================

console.log("===== DAY 8 JAVASCRIPT PRACTICE =====");


// ==========================================
// 1. FUNCTION
// ==========================================

function greetUser(name) {

    console.log("Hello, " + name + "!");
}

greetUser("Subhash");


// ==========================================
// 2. FUNCTION TO ADD TWO NUMBERS
// ==========================================

function addNumbers(a, b) {

    return a + b;
}

const result = addNumbers(10, 20);

console.log("Addition:", result);


// ==========================================
// 3. ARRAY
// ==========================================

const programmingLanguages = [
    "Java",
    "C",
    "JavaScript",
    "Python"
];

console.log("Programming Languages:");
console.log(programmingLanguages);


// ==========================================
// 4. forEach()
// ==========================================

console.log("===== forEach() =====");

programmingLanguages.forEach(function(language) {

    console.log(language);

});


// ==========================================
// 5. map()
// ==========================================

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {

    return number * 2;

});

console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);


// ==========================================
// 6. filter()
// ==========================================

const ages = [12, 18, 21, 15, 25, 16];

const adults = ages.filter(function(age) {

    return age >= 18;

});

console.log("All Ages:", ages);
console.log("Adults:", adults);


// ==========================================
// 7. OBJECT
// ==========================================

const student = {

    name: "Subhash",
    course: "B.Tech CSE",
    semester: 3,
    skills: ["Java", "C", "JavaScript"]

};

console.log("===== STUDENT OBJECT =====");

console.log("Name:", student.name);
console.log("Course:", student.course);
console.log("Semester:", student.semester);
console.log("Skills:", student.skills);


// ==========================================
// 8. ARRAY OF OBJECTS
// ==========================================

const movies = [

    {
        title: "3 Idiots",
        genre: "Comedy / Drama",
        year: 2009,
        rating: 9.0
    },

    {
        title: "Interstellar",
        genre: "Science Fiction",
        year: 2014,
        rating: 8.7
    },

    {
        title: "Inception",
        genre: "Science Fiction / Thriller",
        year: 2010,
        rating: 8.8
    },

    {
        title: "The Dark Knight",
        genre: "Action / Crime",
        year: 2008,
        rating: 9.0
    },

    {
        title: "Avengers: Endgame",
        genre: "Action / Superhero",
        year: 2019,
        rating: 8.4
    },

    {
        title: "Taare Zameen Par",
        genre: "Drama",
        year: 2007,
        rating: 8.3
    }

];

console.log("===== FAVORITE MOVIES =====");

console.log(movies);


// ==========================================
// 9. forEach() WITH MOVIES
// ==========================================

movies.forEach(function(movie) {

    console.log(
        movie.title +
        " | " +
        movie.genre +
        " | " +
        movie.year +
        " | Rating: " +
        movie.rating
    );

});


// ==========================================
// 10. filter() WITH MOVIES
// ==========================================

const highRatedMovies = movies.filter(function(movie) {

    return movie.rating >= 8.8;

});

console.log("===== HIGH RATED MOVIES =====");

console.log(highRatedMovies);


// ==========================================
// 11. map() WITH MOVIES
// ==========================================

const movieTitles = movies.map(function(movie) {

    return movie.title;

});

console.log("===== MOVIE TITLES =====");

console.log(movieTitles);


// ==========================================
// 12. FUNCTION TO DISPLAY MOVIES
// ==========================================

function displayMovies(movieList) {

    const movieContainer =
        document.getElementById("movieContainer");

    movieContainer.innerHTML = "";

    movieList.forEach(function(movie) {

        const movieCard = document.createElement("div");

        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <h3>🎬 ${movie.title}</h3>

            <p>
                <strong>Genre:</strong>
                ${movie.genre}
            </p>

            <p>
                <strong>Year:</strong>
                ${movie.year}
            </p>

            <p class="rating">
                ⭐ Rating: ${movie.rating}/10
            </p>
        `;

        movieContainer.appendChild(movieCard);

    });
}


// ==========================================
// 13. DISPLAY MOVIES ON PAGE
// ==========================================

displayMovies(movies);


console.log("===== DAY 8 COMPLETE =====");
