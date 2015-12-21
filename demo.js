/**********************************************
 * Author : nanyuantingfeng
 * Timestamp : 1/27/15 15:44
 **********************************************/

var Class = require("./index").Class;

var A = Class(Object);

A.fn.geta = function() {
    return this.a;
};
A.fn.getb = function() {
    return this.b;
};

var B = Class(A);

var b = B();

console.log(b.geta());//undefined
console.log(b.getb());//undefined

var C = Class(B, function(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
});

var D = Class(C, function() {
    C.initialize.apply(this, arguments);
});

var d = D(1, 2, 3, 4);

console.log(d.geta());//1
console.log(d.getb());//2

function E(a) {
    this.a = a;
}

E.prototype.testA = function() {
    return this.a;
};

var F = Class(E, function() {
    E.prototype.constructor.apply(this, arguments);
});

var f = F(3);

console.log(f.testA());//3

var EventEmitter = require('events').EventEmitter;

var G = Class(EventEmitter);

G.fn.trigger = function() {
    this.emit.apply(this, arguments);
};

var event = G();

event.on('-event', function() {
    console.log('-event .......');
});

setTimeout(function() {
    event.trigger('-event');
}, 1000);
