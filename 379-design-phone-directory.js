/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
const PhoneDirectory = function(maxNumbers) {
  this.len = maxNumbers
  this.used = new Set()
  this.free = []
}

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
  if (this.used.size === this.len) return -1
  const tmp = this.free.length === 0 ? this.used.size : this.free.pop()
  this.used.add(tmp)
  return tmp
}

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
  return !this.used.has(number)
}

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
  if(this.used.has(number)) {
    this.used.delete(number)
    this.free.push(number)
  }
}

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
