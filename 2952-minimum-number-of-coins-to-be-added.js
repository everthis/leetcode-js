/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
const minimumAddedCoins = function(coins, target) {
  coins.sort((a,b) => a - b)
  const n = coins.length
  let sum = 1, i = 0, res = 0
  while(true) {
    const e = coins[i]
    if(sum > target) break
    if(e <= sum) {
      sum += e
      i++
    } else {
      sum *= 2
      res++
    }
  }
  return res
};

// another

/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function (coins, target) {
  coins.sort((a, b) => a - b)
  let current_max = 0;
  let additions = 0;
  let index = 0;

  while (current_max < target) {
      if (index < coins.length && coins[index] <= current_max + 1) {
          current_max += coins[index];
          index++;
      } else {
          current_max += current_max + 1;
          additions++;
      }
  }

  return additions;
}


// another

/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function (coins, target) {
  coins.sort((a, b) => a - b)
  let currin = 1
  let res = 0

  for (let coin of coins) {
    while (coin > currin) {
      res += 1
      currin *= 2
    }
    currin += coin

    if (currin > target) {
      break
    }
  }

  while (currin <= target) {
    res += 1
    currin *= 2
  }

  return res
}
