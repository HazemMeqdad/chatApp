const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    // Get host name and port and print it to the console
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server running at http://${host}:${port}/`);
})
