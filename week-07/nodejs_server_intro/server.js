const http = require("http");
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 8080

const server = http.createServer((request, response) => {
  response.end("Hello Galvanize!")
});

server.listen(port, host, () => {
  console.log(`> server is now running on http://${host}:${port}`)
})