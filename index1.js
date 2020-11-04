const event = require ("event")
var myEmitter = new event.EventEmitter();

myEmitter.on("click", (mssg )=>{
    console.log(mssg);
})

myEmitter.emit("click")