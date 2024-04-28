/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function (n, x) {
  let str = x.toString(2).padStart(50, '0')

  let map = new Map()
  let c = 1
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '0') {
      map.set(c, i)
      c *= 2
    }
  }

  let sb = str.split('')
  let cur = n
  ;[...map.keys()]
    .sort((a, b) => b - a)
    .forEach((key) => {
      if (cur > key) {
        cur -= key
        sb[map.get(key)] = '1'
      }
    })

  let ans = 0
  let step = 1
  for (let i = sb.length - 1; i >= 0; i--) {
    if (sb[i] === '1') {
      ans += step
    }
    step *= 2
  }

  return ans
}
