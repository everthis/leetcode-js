/**
 * @param {number[][]} nodes
 * @return {boolean}
 */
var isPreorder = function(nodes) {
  const stack = [];

  for (const [curr, parent] of nodes) {
    while (stack.length && stack[stack.length - 1] !== parent) {
      stack.pop();
    }
    if (!stack.length && parent !== -1) {
      return false;
    }
    stack.push(curr);
  }

  return true;
};
