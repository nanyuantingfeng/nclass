/**********************************************
 * Author : nanyuantingfeng
 * Timestamp : 1/27/15 15:44
 **********************************************/

var Class = require("../index").Class;

var A = Class(Object);

A.fn.geta = function() {
    return this.a;
};
A.fn.getb = function() {
    return this.b;
};

var B = Class(A);

var b = B();

console.log(b.geta());
console.log(b.getb());

var C = Class(B, function(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
});

var D = Class(C, function() {
    C.initialize.apply(this, arguments);
});

var d = D(111111, 2, 3, 4);

console.log(d.geta());
console.log(d.getb());
