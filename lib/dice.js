// AI use: This code was generated with Claude (Anthropic), then reviewed and tested by the author.
const crypto = require('crypto')

// Return one random integer from 1 to 6 (inclusive) using the server's random number generator
function rollDie() {
	return crypto.randomInt(1, 7)
}

// Roll the requested number of dice and return the values in an array
function rollDice(count) {
	const dice = []
	for (let i = 0; i < count; i++) {
		dice.push(rollDie())
	}
	return dice
}

// Add up an array of dice values
function sumDice(dice) {
	return dice.reduce((total, value) => total + value, 0)
}

module.exports = { rollDie, rollDice, sumDice }
