// AI use: This code was generated with Claude (Anthropic), then reviewed and tested by the author.
const express = require('express')
const cors = require('cors')
const dice = require('./lib/dice')

const app = express()
const port = process.env.PORT || 3000

const YAHTZEE_DICE_COUNT = 5
const MAX_DICE_COUNT = 20

// Never cache API responses so every call returns fresh random numbers
app.use('/api', (req, res, next) => {
	res.set('Cache-Control', 'no-store')
	next()
})

// Serve the API test page, public/index.html
app.use(express.static(__dirname + '/public'))

// "Wake up" call used by the client to start a sleeping server
app.get('/api/wake', cors(), (req, res) => {
	res.json({ status: 'awake', serverTime: new Date().toISOString() })
})

// Roll one die
app.get('/api/die', cors(), (req, res) => {
	res.json({ value: dice.rollDie() })
})

// Roll a requested number of dice, for example /api/dice/3
app.get('/api/dice/:count', cors(), (req, res) => {
	const count = Number(req.params.count)
	if (!Number.isInteger(count) || count < 1 || count > MAX_DICE_COUNT) {
		return res.status(400).json({
			error: `count must be a whole number from 1 to ${MAX_DICE_COUNT}`
		})
	}
	const values = dice.rollDice(count)
	res.json({ count: count, dice: values, total: dice.sumDice(values) })
})

// Roll five dice for a Yahtzee-style game
app.get('/api/roll', cors(), (req, res) => {
	const values = dice.rollDice(YAHTZEE_DICE_COUNT)
	res.json({ dice: values, total: dice.sumDice(values) })
})

// This route intentionally does NOT use cors(), so a browser on another origin blocks the response
app.get('/api/cors-failure', (req, res) => {
	res.json({ message: 'You can only read this response from the same origin.' })
})

// Anything else is a JSON 404
app.use((req, res) => {
	res.status(404).json({ error: 'Not found' })
})

app.use((err, req, res, next) => {
	console.error(err.message)
	res.status(500).json({ error: 'Server error' })
})

app.listen(port, () => {
	console.log(`Dice Roller API started on port ${port}; press Ctrl-C to stop.`)
})
