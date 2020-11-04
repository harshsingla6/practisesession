const fs = require("fs")

const filesystem = fs.writeFile("text1.text" ,"hey everyone" , ()=>{
    console.log("file is created")
} )