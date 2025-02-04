const events = require('events')
let myEmitter = new events.EventEmitter();
myEmitter.on("someEvent", (name, age) => {
    console.log("Hello! " + name + " You are " + age + " years old");
})

myEmitter.emit("someEvent", "Sana", "20")
myEmitter.emit("someEvent", "Shreya", "20")