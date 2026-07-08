const http = require("http");
const { add, subtract, multiply, isEven } = require("./math");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(
        JSON.stringify({
            status: "UP",
            message: "CI/CD Pipeline Demo",
            endpoints: {
                add: add(5, 3),
                subtract: subtract(10, 2),
                multiply: multiply(4, 6),
                even: isEven(10)
            }
        })
    );
});

module.exports = server;