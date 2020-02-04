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
const depthSumInverse = function(nestedList) {
  const maxDepth = nestedList.reduce(
    (max, list) => Math.max(max, getMaxDepth(list)),
    1
  )
  return nestedList.reduce((total, list) => total + sum(list, maxDepth), 0)
}

function getMaxDepth(nestedList) {
  if (nestedList.isInteger()) return 1
  return nestedList
    .getList()
    .reduce((max, list) => Math.max(max, 1 + getMaxDepth(list)), 1)
}

function sum(nestedList, n) {
  if (nestedList.isInteger()) return n * nestedList.getInteger()
  return nestedList
    .getList()
    .reduce((total, list) => total + sum(list, n - 1), 0)
}

// another

const depthSumInverse = function(nestedList) {
  const Q = []
  let temp = []
  while (nestedList.length) {
    temp = []
    for (let i = 0; i < nestedList.length; i++) {
      if (nestedList[i].isInteger()) {
        Q.push(nestedList[i].getInteger())
      } else {
        let list = nestedList[i].getList()
        temp.push(...list)
      }
    }
    Q.push('level')
    nestedList = temp
  }
  let sum = 0
  let level = 0
  while (Q.length) {
    let item = Q.pop()
    if (item === 'level') {
      level++
    } else {
      sum += item * level
    }
  }
  return sum
}
