const http = require("util");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hello world");
});

server.listen(81, () => {
  console.log("Server is running");
});
