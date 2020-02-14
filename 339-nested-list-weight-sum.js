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
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
const depthSum = function(nestedList) {
  return h(nestedList, 1)
};

function h(arr, level) {
  if(arr == null || arr.length === 0) return 0
  let sum = 0
  for(let i = 0, len = arr.length; i < len; i++) {
    if(arr[i].isInteger()) sum += arr[i].getInteger() * level
    else {
      sum += h(arr[i].getList(), level + 1)
    }
  }
  return sum
}

// another

const depthSum = function(nestedList) {
  if(nestedList == null) return 0
  let sum = 0
  let level = 1
  const q = [...nestedList]
  while(q.length) {
    const len = q.length
    for(let i = 0; i < len; i++) {
      const el = q.shift()
      if(el.isInteger()) sum += el.getInteger() * level
      else q.push(...(el.getList()))
    }
    level++
  }
  return sum
};
