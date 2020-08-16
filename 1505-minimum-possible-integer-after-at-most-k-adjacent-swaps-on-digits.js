/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const minInteger = function (num, k) {
  const nums = num.split("")
  const map = {}
  nums.forEach((n, i) => {
    map[n] = map[n] || []
    map[n].push(i)
  })

  const used = new Set()
  const tree = new Fenwick(nums.length)
  let idx = 0
  let re = ""
  while (k > 0 && idx < nums.length) {
    for (let i = 0; i < 10; i++) {
      if (!map[i] || !map[i].length) continue
      const id = map[i][0]
      const cost = id - tree.query(id)
      if (k < cost) continue
      re += nums[id]
      k -= cost
      used.add(id)
      tree.update(id + 1, 1)
      map[i].shift()
      break
    }
    idx++
  }

  for (let i = 0; i < nums.length; i++) {
    if (!used.has(i)) {
      re += nums[i]
    }
  }

  return re
}
class Fenwick {
  constructor(n) {
    this.sums = new Array(n + 1).fill(0)
  }

  update(i, delta) {
    while (i < this.sums.length) {
      this.sums[i] += delta
      i += i & -i
    }
  }

  query(i) {
    let sum = 0
    while (i > 0) {
      sum += this.sums[i]
      i -= i & -i
    }
    return sum
  }
}
