const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  // Request handler goes here

  // If respond using HTML page
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Halaman ini adalah Home page dengan tipe konten HTML</h1>");
  }
  // If respond using plain text
  else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Halaman ini adalah About page dengan tipe konten plain text");
  }
  // If respond using json (for making API)
  else if (req.url === "/contacts") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    let contacts = JSON.stringify([
      { name: "Sarah", age: "28" },
      { name: "Angga", age: "30" },
    ]);

    res.end(contacts);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
