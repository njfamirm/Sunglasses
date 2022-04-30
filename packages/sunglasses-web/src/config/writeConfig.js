const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

let debugMode = process.env.DEBUG_MODE
let apiServer = process.env.API_SERVER

if (debugMode !== 'production') {
  debugMode = 'debug'
  apiServer = 'http://localhost:7000'
} else if (apiServer === undefined) {
  apiServer = 'http://localhost:7000'
}

const config = {
  debugMode: debugMode,
  apiServer: apiServer
}

const jsonConfig = JSON.stringify(config)

console.log(`
Debug mode: ${jsonConfig.debugMode}
API server: ${jsonConfig.apiServer}
`)

fs.writeFileSync('./src/config/config.json', jsonConfig, {encoding: 'utf-8'})
