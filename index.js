const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  // Request handler goes here
  res.write("Hello World!");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
