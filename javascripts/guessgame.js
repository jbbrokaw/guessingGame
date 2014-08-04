


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


function guessButtonHit() {
        //public var; maybe update to let user modify the correct answer based on their age/something
        this.correctAnswer = 11;
	var guess = retrieveGuess();
	//This line was becuase I was having some problems
	//alert("I have reached the second line of this function with the " + typeof guess + " " + guess);
	if (guess === this.CorrectAnswer) {
		alert("Wow, you are correct! You know my age to within 5 years or so");
	} else {
		if (guess < this.CorrectAnswer) {
			alert("A bit low. Feel free to try again (remember 1 does not count as prime)");
		} else {
			alert("A bit high. Feel free to try again (remember 1 does not count as prime)");
		}
	}

};

