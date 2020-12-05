/**
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = function(piles) {
  piles.sort((a, b) => a - b)
  let coins = 0, n = piles.length
  for(let j = 0, i = n - 2, hi = Math.floor(n / 3); j < hi; j++, i -= 2) {
    coins += piles[i]
  }
  
  return coins
};
