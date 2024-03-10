/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
let total_apple = apple.reduce((a, b) => a + b, 0)
capacity.sort((a, b) => b - a)
let ans = 0
let cur = 0
for (let c of capacity) {
  cur += c
  ans += 1
  if (cur >= total_apple) {
    return ans
  }
}
};
