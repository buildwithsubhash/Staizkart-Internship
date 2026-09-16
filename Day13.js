
// ==========================================
// DAY 13 - API & FETCH
// ==========================================


// ==========================================
// 1. SELECT HTML ELEMENTS
// ==========================================

const quoteElement =
    document.querySelector("#quote");

const authorElement =
    document.querySelector("#author");

const quoteButton =
    document.querySelector("#quoteButton");

const loadingElement =
    document.querySelector("#loading");


// ==========================================
// 2. API URL
// ==========================================

const apiUrl =
    "https://dummyjson.com/quotes/random";


// ==========================================
// 3. FETCH QUOTE
// ==========================================

async function getQuote() {

    try {

        // Show loading message

        loadingElement.textContent =
            "Loading...";

        quoteButton.disabled = true;


        // Send request to API

        const response =
            await fetch(apiUrl);


        // Check response

        if (!response.ok) {

            throw new Error(
                "Failed to fetch quote"
            );

        }


        // Convert response to JSON

        const data =
            await response.json();


        // Display quote

        quoteElement.textContent =
            `"${data.quote}"`;


        // Display author

        authorElement.textContent =
            `— ${data.author}`;


        // Remove loading message

        loadingElement.textContent =
            "";


    } catch (error) {

        // Handle errors

        console.error(
            "Error:",
            error
        );


        quoteElement.textContent =
            "Unable to load quote.";


        authorElement.textContent =
            "Please try again.";


        loadingElement.textContent =
            "";

    } finally {

        quoteButton.disabled = false;

    }

}


// ==========================================
// 4. BUTTON EVENT
// ==========================================

quoteButton.addEventListener(
    "click",
    getQuote
);


// ==========================================
// 5. LOAD FIRST QUOTE
// ==========================================

getQuote();
