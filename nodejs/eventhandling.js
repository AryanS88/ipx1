const EventEmitter = require("events");

const myEmitter = new EventEmitter();

function onCustomEvent(data) {
  console.log("Custom event was triggered with data:", data);
}

myEmitter.on("customEvent", onCustomEvent);

myEmitter.emit("customEvent", { message: "Hello, world!" });

myEmitter.off("customEvent", onCustomEvent);

myEmitter.emit("customEvent", { message: "This won't be printed" });
