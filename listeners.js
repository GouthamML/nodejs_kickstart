var events = require('events');
var emitter = new events.EventEmitter();

//listener 1

var listener1 = function listener1(){
    console.log("#1 executed");
}

var listener2 = function listener2(){
    console.log("#2 executed");
}

//Bind connection event with #1

emitter.addListener('connection', listener1);

//Bind connection event with #1
emitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(emitter, 'connection');
console.log(eventListeners+"Listerners listening to connection event");

//firing the connection event
emitter.emit('connection');

//remove binding of listener1 function
emitter.removeListener('connection',listener1);
console.log("Listner1 will not listen now.");

//again fire connection
emitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(emitter, 'connection');
console.log(eventListeners+"Listerners listening to connection event");

console.log("\n\nProgram Ended.\n\n");
