/**
 * @param {number[]} coins
 * @return {number}
 */
const getMaximumConsecutive = function(coins) {
  coins.sort((a, b) => a - b);
  let res = 1;
  for (let a of coins) {
    if (a > res) break;
    res += a;
  }
  return res; 
};
