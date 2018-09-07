var events = require('events');

var emitter = new events.EventEmitter();

var handler = function conncted(){
    console.log('connection\n');

    // fire an event
    emitter.emit('data_received');
}

//bind connection with handler

emitter.on('connection_event', handler);

//bind event with anonymous function
emitter.on('data_received', function(){
    console.log('data received succesfully');
});

//fire connection event
emitter.emit('connection_event');

console.log("program ended");