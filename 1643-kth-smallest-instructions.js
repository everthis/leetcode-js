/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
const kthSmallestPath = function (destination, k) {
  let v = destination[0],
    h = destination[1]
  const mu = (c, n) => {
    let res = ''
    for (let i = 0; i < n; i++) {
      res += c
    }
    return res
  }

  let res = ''
  while (h > 0 && v > 0) {
    let pre = comb(h + v - 1, v)
    if (k <= pre) {
      res += 'H'
      h -= 1
    } else {
      res += 'V'
      v -= 1
      k -= pre
    }
  }
  if (h == 0) res += mu('V', v)
  if (v == 0) res += mu('H', h)
  return res
}

function product(a, b) {
  let prd = a,
    i = a

  while (i++ < b) {
    prd *= i
  }
  return prd
}

function comb(n, r) {
  if (n == r) {
    return 1
  } else {
    r = r < n - r ? n - r : r
    return product(r + 1, n) / product(1, n - r)
  }
}
