// Create an array that contains the letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var currentString = "";

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
	for (var i = 0; i < theAlphabetArray.length; i++) {
		currentString += theAlphabetArray[i];
		console.log(currentString);
		if ((i + 1) % 3 === 0) {
			currentString += " ";
		}
	}
}

// Invoke the function and pass in the array
stackLetters(alphabet)