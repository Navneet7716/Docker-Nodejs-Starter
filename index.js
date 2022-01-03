const express = require("express")

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.get("/", (req, res) => {

	res.send("hello from docker");

});


app.listen(PORT,HOST);

console.log(`Running on https://${HOST}:${PORT}`)
