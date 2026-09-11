// ==========================================
// 9. NUMBER GUESSING GAME
// ==========================================

function numberGuessingGame() {

    console.log("===== NUMBER GUESSING GAME =====");

    // Generate random number between 1 and 100
    const targetNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;
    let guessedCorrectly = false;

    alert("Welcome to the Number Guessing Game!\n\nGuess a number between 1 and 100.");

    while (!guessedCorrectly) {

        const userInput = prompt(
            "Guess a number between 1 and 100:\n\nAttempts: " + attempts
        );

        // Check if user cancelled the game
        if (userInput === null) {
            console.log("Game cancelled.");
            alert("Game cancelled!");
            break;
        }

        const guess = Number(userInput);

        // Check invalid input
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
            continue;
        }

        // Check range
        if (guess < 1 || guess > 100) {
            alert("Please enter a number between 1 and 100.");
            continue;
        }

        attempts++;

        // Correct guess
        if (guess === targetNumber) {

            guessedCorrectly = true;

            console.log(
                "Congratulations! You guessed the number."
            );

            console.log("Correct Number:", targetNumber);
            console.log("Total Attempts:", attempts);

            alert(
                "🎉 Congratulations!\n\n" +
                "You guessed the correct number: " +
                targetNumber +
                "\n\nAttempts: " +
                attempts
            );

        }

        // Guess is too low
        else if (guess < targetNumber) {

            console.log("Your guess is too low.");

            alert(
                "Too Low! 📉\n\nTry a higher number."
            );

        }

        // Guess is too high
        else {

            console.log("Your guess is too high.");

            alert(
                "Too High! 📈\n\nTry a lower number."
            );
        }
    }
}


// ==========================================
// START GAME
// ==========================================

numberGuessingGame();

console.log("===== END OF DAY 7 =====");