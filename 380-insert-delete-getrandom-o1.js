/**
 * Initialize your data structure here.
 */
const RandomizedSet = function() {
    this.data = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.data.indexOf(val) === -1) {
        this.data.push(val)
        return true
    }
    return false
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let idx = this.data.indexOf(val)
    if(idx !== -1) {
        this.data.splice(idx, 1)
        return true
    }
    return false
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const len = this.data.length
    const idx = Math.floor(Math.random() * len)
    return this.data[idx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
