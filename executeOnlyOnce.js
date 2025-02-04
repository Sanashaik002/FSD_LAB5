const events = require('events');
let myEmitter = new events.EventEmitter();
myEmitter.once("someEvent", (name) => {
    console.log("Some event Triggered", name);
});

myEmitter.emit("someEvent", "CVR")
myEmitter.emit("someEvent", "CVR")
myEmitter.emit("someEvent", "CVR")