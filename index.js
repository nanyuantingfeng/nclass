/**********************************************
 * Author : nanyuantingfeng
 * Timestamp : 1/27/15 15:38
 **********************************************/

function Class(Super, init) {
  var N, NEW;
  N = function() {};
  init = init || N;
  N.prototype = Super.prototype;
  NEW = function() {
    return new NEW.fn.initialize(arguments);
  };
  NEW.fn = NEW.prototype = new N();
  NEW.fn.initialize = function(M) {
    init.apply(this, M);
    return this
  };
  NEW.fn.constructor = NEW;
  NEW.fn.initialize.prototype = NEW.fz = NEW.fn;
  NEW.initialize = init;
  return NEW;
}

function Class2(Super, init) {
  var N, NEW;
  N = function() {};
  init = init || N;
  N.prototype = Super.prototype;
  NEW = function() {
    init.apply(this, arguments);
    return this;
  };
  NEW.fn = NEW.prototype = new N();
  NEW.fn.constructor = NEW;
  NEW.initialize = init;
  return NEW;
}

module.exports['default'] = Class;
module.exports.Class = Class;
module.exports.Class2 = Class2; 

