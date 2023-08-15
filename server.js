const http = require('http');
const dotenv = require('dotenv');
const WebSocket = require('ws');

dotenv.config();
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const wss = new WebSocket.Server({ port: process.env.WS_PORT });

// Websocket connection handler
wss.on('connection', ws => {
    console.log('New client connected!');
    ws.send("Welcome New Client! Please provide your id in local storage to connect to the server.")
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
        ws.send('Hello World!');
    })
})


server.listen(port, () => {
    // Get host name and port and print it to the console
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server running at http://${host}:${port}/`);
})
