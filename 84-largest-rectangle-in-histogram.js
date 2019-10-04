/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
  if (!heights.length) return 0;
  let stack = [];
  let max = 0;
  for (let i = 0, cur, len = heights.length; i <= len; i++) {
    cur = i === len ? -1 : heights[i];
    while (stack.length && cur < heights[stack[stack.length - 1]]) {
      let index = stack.pop();
      let h = heights[index];
      let w = !stack.length ? i : i - stack[stack.length - 1] - 1;
      max = Math.max(max, h * w);
    }
    stack.push(i);
  }
  return max;
};
