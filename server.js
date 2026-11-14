import http from "http";

const server = http.createServer((req, res) => {
  res.writeHeader(200, { "content-Type": "text/html" });
  res.write("<h1>My Server</h1>");
  res.write("<p> this is a simple http server created using node.js.</p>");
  res.end();
});
const port = 3000;
server.listen(port, () => {
  
  console.log(`Server is running at http://localhost:${port}/`);
});
