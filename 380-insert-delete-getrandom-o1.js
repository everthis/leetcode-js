/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
  this.map = new Map()
  this.array = []
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const { array, map } = this
  if (map.has(val)) return false
  array.push(val)
  map.set(val, array.length - 1)
  return true
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const { array, map } = this
  if (!map.has(val)) return false
  const [last, index] = [array[array.length - 1], map.get(val)]
  array[index] = last
  map.set(last, index)
  array.pop()
  map.delete(val)
  return true
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const { array } = this
  const r = Math.floor(array.length * Math.random())
  return array[r]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
