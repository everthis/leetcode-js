/**
 * Initialize your data structure here.
 */
const MapSum = function() {
  this.hash = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.hash[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let res = 0;
  Object.keys(this.hash).forEach(el => {
    if (el.indexOf(prefix) === 0) {
      res += this.hash[el];
    }
  });
  return res;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
