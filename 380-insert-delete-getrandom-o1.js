/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
  this.arr = []
  this.map = new Map()
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const {arr, map} = this
  if(map.has(val)) return false
  const size = arr.length
  arr.push(val)
  map.set(val, size)
  return true
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const {arr, map} = this
  if(!map.has(val)) return false
  const idx = map.get(val), last = arr[arr.length - 1]
  arr[idx] = last
  map.set(last, idx)
  arr.pop()
  map.delete(val)
  return true
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[~~(this.arr.length * Math.random())]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
