const http = require('http');

http.createServer(function (req, res) {
res.write("Welcome one, welcome all!");
res.write("Enjoy your stay!");
res.end();


}
).listen(3000);

console.log("Server started on port 3000");
