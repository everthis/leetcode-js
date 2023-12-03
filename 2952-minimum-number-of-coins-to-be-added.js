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
