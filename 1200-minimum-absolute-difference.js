/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b)
  let min = Number.MAX_VALUE
  for(let i = 1, len = arr.length; i < len; i++) {
    if(arr[i] - arr[i - 1] < min) min = arr[i] - arr[i - 1]
  }
  const res = []
  for(let i = 1, len = arr.length; i < len; i++) {
    if(arr[i] - arr[i - 1] === min) res.push([arr[i - 1], arr[i]])
  }
  return res
};
