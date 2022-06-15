/**
 * @param {number[]} heights
 * @return {number[]}
 */
const findBuildings = function(heights) {
  const n = heights.length, suffix = Array(n).fill(0)
  let max = 0
  const res = [n - 1]
  for(let i = n - 2; i >= 0; i--) {
    max = Math.max(max, heights[i + 1])
    suffix[i] = max
    if(max < heights[i]) res.push(i)
  }
  res.reverse()
  return res
};
