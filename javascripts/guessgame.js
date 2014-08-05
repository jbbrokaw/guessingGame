//Probably correctAnswer should be an attribute of some object, but for now, global variable.
var correctAnswer = 11;

function retrieveGuess() {
	var promptString = "Guess how many times my age in years has been a prime number!";//maybe make this public/global so we can change it.
	var guess = prompt(promptString);
	if  (guess == Number(guess)) return Number(guess);
	else {
		alert("Something might be funny but I'm trying this anyway");
		return Number(guess);
	}
};


function guessButtonHit() {
	var guess = retrieveGuess();
	if (guess === correctAnswer) {
		alert("Wow, you are correct! You know my age to within 5 years or so (assuming normal human ages)");
	} else {
		if (guess < correctAnswer) {
			alert("A bit low. Feel free to try again (remember 1 does not count as prime)");
		} else {
			alert("A bit high. Feel free to try again (remember 1 does not count as prime)");
		};
	};

};

function isPrime(num) {
	if (num === 1) return false; //kind of a special case
	if (num === 2) return true; //kind of a special case, although it would still return true w/o this line
	if (num === 3) return true; //The loop below doesn't work because it never executes for 3, although it would still return true w/o this line
	if (num === 4) return false; //The loop below doesn't work because it never executes for 4
	for (var i = 2; i < num/2; i++) {
		if ((num % i) === 0) return false;
	}
	return true;
};

function countPrimes(num2) {
	var total = 0;
	for (var i = 2; i<=num2; i++) {
		if (isPrime(i)) total++;
	}
	return total;
};

function resetButtonHit() {
	var age = prompt("Enter my new age");
	correctAnswer = countPrimes(age);
	//Debug line below
	//alert("The new correct answer is " + correctAnswer + " or " + countPrimes(age) + " for an age of " + age);

	/* //Troubleshooting prime checker function
	for (var i = 2; i<10; i++) {
		alert("For the number " + i + " isPrime = " + isPrime(i));
	};*/
};

