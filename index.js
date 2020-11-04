const express = require("express");

const app = express();
Port = 3000;
app.get('/', (req, res) =>{
    res.send(" Hii goood morning ")
    res.end("i hope your day has a wonderfull starting")
})

app.listen(Port , () => {
    console.log("server is created")
})