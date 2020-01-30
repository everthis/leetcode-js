/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
const deserialize = function(s) {
  const recursion = s => {
    const re = new NestedInteger()
    if (!s || s.length === 0) {
      return re
    }
    if (s.charAt(0) !== '[') {
      re.setInteger(parseInt(s, 10))
    } else if (s.length > 2) {
      let start = 1
      let cnt = 0
      for (let i = 1; i < s.length; i++) {
        const char = s.charAt(i)
        if (cnt === 0 && (char === ',' || i === s.length - 1)) {
          re.add(recursion(s.substring(start, i)))
          start = i + 1
        } else if (char === '[') {
          cnt++
        } else if (char === ']') {
          cnt--
        }
      }
    }
    return re
  }
  return recursion(s)
}
