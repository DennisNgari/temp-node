const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("This is our short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p> We can't find the page youa are looking for.</p>
    <a href='/'>Back home</a>`);
});

server.listen(5000);
