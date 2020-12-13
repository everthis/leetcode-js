/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  let res = 0
  const arr = n.split('').map(e => parseInt(e))
  for(let i = 0, len = arr.length; i < len; i++) {
    res = Math.max(arr[i], res)
  }
  return res
};
