const WebSocket = require('ws');

const wss = new WebSocket();

wss.on('connection', ws => {
    console.log('New client connected!');
    ws.send("Welcome New Client! Please provide your id in local storage to connect to the server.")
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
        ws.send('Hello World!');
    })
})
