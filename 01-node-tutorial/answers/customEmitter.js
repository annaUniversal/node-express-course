const EventEmitter = require("events");

const emitter = new EventEmitter();
let count = 0;
setInterval(() => {
  count++;  
  emitter.emit("timer", count,);
}, 1000);

emitter.on("timer", (msg) => console.log(msg, "sec."));