/**********************************************
 * Author : nanyuantingfeng
 * Timestamp : 1/27/15 15:38
 **********************************************/

/**
 * @param Super
 * @param initialize
 * @returns {NEW|*}
 * @constructor : {
 *  value : NEW, 
 *  enumerable : false, 
 *  writable : true, 
 *  configurable : true 
 * }
 */
function Class(Super, initialize) {
  var N, NEW, _;
  N = function() {};
  initialize = initialize || N;
  N.prototype = Super.prototype;
  _ = function() { initialize.apply(this, arguments[0])};
  NEW = function() { return new _(arguments)};
  NEW.fn = NEW.prototype = new N();
  NEW.fn.constructor = NEW;
  _.prototype = NEW.fn;
  NEW.initialize = initialize;
  return NEW;
}

function inherit(Super, initialize) {
  var N, NEW;
  N = function() {};
  NEW = initialize || N;
  N.prototype = Super.prototype;
  NEW.fn = NEW.prototype = new N();
  NEW.fn.constructor = NEW;
  NEW.initialize = initialize;
  return NEW;
}

exports['default'] = Class;
exports.Class = Class;
exports.inherit = inherit;
