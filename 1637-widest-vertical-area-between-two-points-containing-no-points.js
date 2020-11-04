/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = function(points) {
  const arr = points.map(e => e[0])
  arr.sort((a, b) => a - b)
  let res = -Infinity
  for(let i = 1, len = arr.length; i < len; i++) {
    if(arr[i] - arr[i - 1] > res) res = arr[i] - arr[i - 1]
  }
  return res
};
