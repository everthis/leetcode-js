const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const replaceNonCoprimes = function (nums) {
  const stk = [];
  for (let x of nums) {
    if (stk.length === 0) {
      stk.push(x);
    } else {
      while (stk.length && gcd(stk[stk.length - 1], x) !== 1) {
        // check if it can be merged with the value to its left
        const last = stk.pop(),
          g = gcd(x, last);
        x = (x / g) * last; // merge value, update lcm to x
      }
      stk.push(x);
    }
  }
  return stk;
};
