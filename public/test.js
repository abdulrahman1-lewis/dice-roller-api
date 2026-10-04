// AI use: This code was generated with Claude (Anthropic), then reviewed and tested by the author.
const requestLine = document.getElementById('requestLine')
const output = document.getElementById('output')

// Call one API path on this server and show the status and JSON body
async function callApi(path) {
	requestLine.textContent = `GET ${path}`
	output.textContent = 'Waiting for response...'
	try {
		const response = await fetch(path)
		const body = await response.json()
		output.textContent = `Status: ${response.status}\n\n` + JSON.stringify(body, null, 2)
	} catch (error) {
		output.textContent = `Request failed: ${error.message}`
	}
}

document.getElementById('wakeButton').addEventListener('click', () => callApi('/api/wake'))
document.getElementById('dieButton').addEventListener('click', () => callApi('/api/die'))
document.getElementById('rollButton').addEventListener('click', () => callApi('/api/roll'))
document.getElementById('corsButton').addEventListener('click', () => callApi('/api/cors-failure'))
document.getElementById('diceButton').addEventListener('click', () => {
	const count = document.getElementById('countInput').value
	callApi(`/api/dice/${encodeURIComponent(count)}`)
})
