# Dice Roller API

@author Abdulrahman

## Description

A Node.js and Express web service for the Dice Roller application. All random numbers are
generated on the server. The site has no standard user interface. Its main file, `index.html`,
only tests the RESTful APIs and does not implement the Dice Roller itself.

The Dice Roller website (a separate project, `web-dice-roller`) calls these APIs.

## RESTful APIs

| Method and path | Description | CORS |
| --- | --- | --- |
| `GET /api/die` | Roll one die, returns `{ "value": 1-6 }` | Allowed |
| `GET /api/dice/:count` | Roll 1 to 20 dice, returns the dice and total | Allowed |
| `GET /api/roll` | Roll five dice for Yahtzee, returns the dice and total | Allowed |
| `GET /api/cors-failure` | Intentionally has no CORS headers | Not allowed |

## Build and run locally

1. Install Node.js (LTS) from https://nodejs.org
2. In this folder, run `npm install`
3. Run `npm start`
4. Open http://localhost:3000 to use the API test page
5. Press Ctrl+C to stop the server

## Deploy to Azure

1. Push this project to a public GitHub repository.
2. In the Azure portal, create an **App Service** (Web App) with the **Node 20 LTS** (or newer)
   runtime stack.
3. Deploy the code, either with the Deployment Center connected to the GitHub repository or with
   the Azure App Service extension in VS Code.
4. Azure runs `npm start` and supplies the port in the `PORT` environment variable.
5. Open the app's HTTPS URL and test the APIs with the test page.

Azure Web App URL: [ADD YOUR AZURE APP SERVICE URL HERE]

## Credits

- Express (https://expressjs.com) and the cors package (https://github.com/expressjs/cors).
- Course examples by Eric Pogue (https://github.com/EricJPogue/cpsc-example-code).
