/**
 * @param {string} input
 * @return {number[]}
 */
const diffWaysToCompute = function(input) {
  const res = [];
  let left;
  let right;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < "0") {
      left = diffWaysToCompute(input.slice(0, i));
      right = diffWaysToCompute(input.slice(i + 1));
      for (let rl of left) {
        for (let rr of right) {
          switch (input[i]) {
            case "+":
              res.push(rl + rr);
              break;
            case "-":
              res.push(rl - rr);
              break;
            case "*":
              res.push(rl * rr);
              break;
            default:
              break;
          }
        }
      }
    }
  }
  if (res.length === 0) {
    res.push(+input);
  }
  return res;
};
