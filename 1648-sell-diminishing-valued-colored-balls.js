/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
function maxProfit(inventory, orders) {
  inventory.sort((a, b) => a - b)
  inventory = inventory.map(e => BigInt(e))
  let ans = 0n, n = inventory.length - 1, count = 1n
  const mod = BigInt(10 ** 9 + 7)
  orders = BigInt(orders)
  while(orders > 0n) {
    if(n > 0 && inventory[n] > inventory[n - 1] && orders >= count * (inventory[n] - inventory[n - 1])) {
      ans += count * sum(inventory[n - 1], inventory[n])
      orders -= count * (inventory[n] - inventory[n - 1])
    } else if(n === 0 || inventory[n] > inventory[n - 1]) {
      const num = orders / count
      ans += count * sum(inventory[n] - num, inventory[n])
      const remain = orders % count
      ans += remain * (inventory[n] - num)
      orders = 0n
    }
    ans %= mod
    n--
    count++
  }
  return ans
}

function sum(lo, hi) {
  return (hi - lo) * (lo + hi + 1n) / 2n
}

// another

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
