/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (baskets[j] >= fruits[i]) {
        baskets[j] = -1
        break
      }
    }
  }
  let res = 0
  for (let i = 0; i < baskets.length; i++) {
    res += baskets[i] !== -1 ? 1 : 0
  }
  return res
}
