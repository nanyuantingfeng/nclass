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
  NEW = function() {
    return new _(arguments)
  };
  _ = function() {
    initialize.apply(this, arguments[0]);
  };
  _.prototype = NEW.fn = NEW.prototype = new N();
  NEW.fn.constructor = NEW;
  NEW.initialize = initialize;
  return NEW;
}

module.exports = Class.Class = Class;
