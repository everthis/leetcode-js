/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
const maxProfit = function(inventory, orders) {
  const bigIntMax = (...args) => args.reduce((m, e) => e > m ? e : m);
  inventory = inventory.map(e => BigInt(e))
  orders = BigInt(orders)
  let l = 0n, r = bigIntMax(...inventory)
  while(l < r) {
    const mid = l + (r - l) / 2n
    if(valid(mid)) l = mid + 1n
    else r = mid
  }
  
  // console.log(l)
  const mod = BigInt(1e9 + 7)
  let t = l, res = 0n, cnt = 0n
  for(const e of inventory) {
    if(e <= t) continue
    cnt += e - t
    res = (res + (t + 1n + e) * (e - t) / 2n) % mod
  }
  
  res = (res + (orders - cnt) * t) % mod
  
  return res
  
  function valid(mid) {
    let res = 0n
    for(const e of inventory) {
      if(e > mid) res += e - mid
    }
    return res > orders
  }
};

// another

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

// another

/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function(inventory, orders) {
    inventory.sort((a, b) => b - a)
    const mod = BigInt(1e9 + 7), n = BigInt(inventory.length)
    inventory = inventory.map(e => BigInt(e))
    orders = BigInt(orders)
    let cur = BigInt(inventory[0]), res = 0n, i = 0n
    const min = (a, b) => a > b ? b : a
    while(orders) {
      while(i < n && inventory[i] === cur) i++
      let next = i === n ? 0n : inventory[i]
      let h = cur - next, r = 0n, cnt = min(orders, i * h)
      if (orders < i * h) {
        h = orders / i
        r = orders % i
      }
      let val = cur - h
      res = (res + (cur + val + 1n) * h / 2n * i + val * r) % mod
      orders -= cnt
      cur = next
    }

    return res
};

// another

/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
const maxProfit = function (inventory, orders) {
  inventory.sort((a, b) => b - a)
  const mod = BigInt(1e9 + 7),
    n = BigInt(inventory.length)
  inventory = inventory.map((e) => BigInt(e))
  orders = BigInt(orders)
  let cur = BigInt(inventory[0]),
    res = 0n,
    i = 0n
  const min = (a, b) => (a > b ? b : a)
  while (orders) {
    while (i < n && inventory[i] === cur) i++
    let next = i === n ? 0n : inventory[i]
    let h = cur - next,
      r = 0n,
      cnt = min(orders, i * h)
    if (orders < i * h) {
      h = orders / i
      r = orders % i
    }
    let val = cur - h
    res = (res + (((cur + val + 1n) * h) / 2n) * i + val * r) % mod
    orders -= cnt
    cur = next
  }

  return res
}
