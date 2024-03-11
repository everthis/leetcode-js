/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
  const sum = apple.reduce((ac, e) => ac+ e, 0)
  capacity.sort((a, b) => b - a)
  let res = 0
  let remain = sum, i = 0
  while(remain > 0) {
      res++
      remain -= capacity[i]
      i++
  }
  
  return res
};
