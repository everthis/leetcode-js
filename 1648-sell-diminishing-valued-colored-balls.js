/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
const maxProfit = function (inventory, orders) {
  let Max = 1e9 + 7,
    Min = 0
  let mod = BigInt(1e9 + 7)
  while (Max > Min + 1) {
    let tot = 0
    let mid = ((Max + Min) >> 1)
    for (let it of inventory) {
      if (it > mid) tot += it - mid
    }
    if (tot > orders) Min = mid
    else Max = mid
  }
  let sum = BigInt(0)
  Max = BigInt(Max)
  orders = BigInt(orders)
  for (let it of inventory) {
    it = BigInt(it)
    if (it > Max) {
      sum += ((it + Max + BigInt(1)) * (it - Max)) / BigInt(2)
      orders -= it - Max
    }
  }
  sum += orders * Max
  
  return sum % mod
}
