/**
 * @param {number[]} arr
 * @return {number}
 */
const mctFromLeafValues = function(arr) {
  let res = 0, n = arr.length;
  let stack = new Array();
  stack.push(Number.MAX_VALUE);
  for (let a of arr) {
    while (stack[stack.length - 1] <= a) {
      let mid = stack.pop();
      res += mid * Math.min(stack[stack.length - 1], a);
    }
    stack.push(a);
  }
  while (stack.length > 2) {
    res += stack.pop() * stack[stack.length - 1];
  }
  return res;   
};
