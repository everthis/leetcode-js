/**
 * Initialize your data structure here.
 */
const AllOne = function() {
  this.map = new Map()
}

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  let curCount
  if (this.map.has(key)) {
    curCount = this.map.get(key) + 1
  } else {
    curCount = 1
  }
  this.map.set(key, curCount)
}

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  if (this.map.has(key)) {
    if (this.map.get(key) > 1) {
      this.map.set(key, this.map.get(key) - 1)
    } else this.map.delete(key)
  } else {
    return
  }
}

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  let max = -Infinity,
    maxStr = ''
  for (let k of this.map) {
    if (k[1] > max) {
      max = k[1]
      maxStr = k[0]
    }
  }
  return maxStr
}

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  let min = Infinity,
    minStr = ''
  for (let k of this.map) {
    if (k[1] < min) {
      min = k[1]
      minStr = k[0]
    }
  }
  return minStr
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
