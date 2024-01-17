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

// another

/**
 * @param {number[]} coins
 * @return {number}
 */
const getMaximumConsecutive = function(coins) {
  coins.sort((a, b) => a - b)
  let sum = 1, res = 1, i = 0
  while(true) {
    const e = coins[i]
    if(i >= coins.length) break
    if(e <= sum) {
      sum += e
      i++
    } else {
      break
    }
  }

  return sum
};
