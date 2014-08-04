
//global var (I think, not real sure on scope stuff in this language; maybe update to let user modify the correct answer based on their age/something
var correctAnswer = 11;


function retrieveGuess() {
	//Storing the prompt string in a public variable in case we want to change it later
	this.promptString = "Guess how many times my age in years has been a prime number!";
	var guess = prompt(promptString);
	if  (guess == Number(guess)) return Number(guess);
	else {
		alert("Something might be funny but I'm trying this anyway");
		return Number(guess);
	}
};

//takes and checks guess
function checkGuess(guess) {
	if (guess === CorrectAnswer) return true;
	else return false;
}

function guessButtonHit() {
	var guess = retrieveGuess();
	if (checkGuess(guess)) {
		alert("Wow, you are correct! You know my age to within 5 years or so");
	}
	else alert("Not quite. Feel free to try again (remember 1 does not count as prime)");
}

