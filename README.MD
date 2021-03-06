nclass.js
=========

Installation
------------

Install with `npm`:

``` bash
$ npm install --save nclass
```

Example
-------

``` js

var Class = require('nclass').Class;

 //class A inherited from Object
var A = Class(Object); 
// A.fn <===> A.prototype;
A.fn.getA = function(){  
    return this.a;
}

//class B inherited from  A
var B = Class(A , function(a,b){  
    this.a = a;
    this.b = b;
});      

// create instance keyword `new` is optional.
var b = /**new**/ B(1,2); 

b.getA(); //1;

var C = Class(B, function(){
    B.initialize.apply(this, arguments);
})

/****
 *B.initialize 
 *<===> 
 *function(a,b){ this.a = a;  this.b = b;  }
 ****/

var c = /**new**/ C(22,33);

c.getA() ; // cc === 22; 
 
```


License
-------

(The MIT License)

Copyright (c) 2015 nanyuantingfeng &lt;nanyuantingfeng@aliyun.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
