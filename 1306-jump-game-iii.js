/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function(arr, start) {
  const s = new Set()
  return helper(arr, start, s)
};

function helper(arr, start, s) {
  if(start < 0 || start >= arr.length || s.has(start)) return false
  s.add(start)
  if(arr[start] === 0) return true
  
  return helper(arr, start + arr[start], s) || helper(arr, start - arr[start], s)
}
