/**
 * @param {string} characters
 * @param {number} combinationLength
 */
const CombinationIterator = function (characters, combinationLength) {
  this.arr = build(combinationLength, characters.split('').sort().join(''))
  this.pos = 0
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  if (this.pos < this.arr.length) {
    return this.arr[this.pos++]
  }
}

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.pos < this.arr.length
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
function build(max, str, out = [], curr = '') {
  if (curr.length === max) {
    out.push(curr)
    return
  } else {
    for (let i = 0; i < str.length; i++) {
      build(max, str.slice(i + 1), out, curr + str[i])
    }
  }

  return out
}

// another

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
const CombinationIterator = function(characters, combinationLength) {
  const res = [], len = combinationLength, str = characters, n = str.length
  helper([], 0)
  this.arr = res
  this.idx = 0
  
  function helper(cur, idx) {
      if(cur.length === len) {
          res.push(cur.slice().join(''))
          return
      }
      if(idx >= n) return

      cur.push(str[idx])
      helper(cur, idx + 1)
      cur.pop()

      helper(cur, idx + 1)
  }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  if(this.hasNext()) {
      return this.arr[this.idx++]
  }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return this.arr[this.idx] != null
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// another

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
const CombinationIterator = function(characters, combinationLength) {
  const res = [], len = combinationLength, str = characters, n = str.length
  helper()

  // console.log(res)
  this.arr = res
  this.idx = 0
  
  function helper() {
     const limit = 1 << n
     for(let i = limit - 1; i > 0; i--) {
       let tmp = i, ts = '', idx = n - 1
       while(tmp) {
         if(tmp & 1) {
           ts = str[idx] + ts
         }
         idx--
         tmp = (tmp >> 1)
       }
       if(ts.length === len) res.push(ts)
     }
  }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  if(this.hasNext()) {
      return this.arr[this.idx++]
  }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return this.arr[this.idx] != null
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


