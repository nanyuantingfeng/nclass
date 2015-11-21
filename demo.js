/**********************************************************
 * Author : nanyuantingfeng
 * Timestamp : 2015-11-22 02:51
 **********************************************************/

var nfix = require("nfix");
var Class = nfix.Class;

var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, "one");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, "two");
});
var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, "three");
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 10, "four");
});
var p5 = new Promise(function(resolve, reject) {
    // reject("reject");
    resolve(10000)
});

var arr = [p1, p2, p3, p4, p5];

var obj = {p1 : p1, p2 : p2, p3 : p3, p4 : p4, p5 : p5};

nfix.Promise.all(obj).then(function(value) {
    console.log(value);
}, function(reason) {
    console.log(reason)
});

nfix.Promise.all(arr).then(function(value) {
    console.log(value);
}, function(reason) {
    console.log(reason)
});

