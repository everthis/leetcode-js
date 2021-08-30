/**
 * @param {string} s
 * @return {number}
 */
const maxProduct = function (s) {
  const t1 = helper(s),
    t2 = helper(reverse(s))
  let res = 0
  for (let n = s.length, i = 0, j = n - 2; i < n - 1; ++i, --j)
    res = Math.max(res, t1[i] * t2[j])

  return res
}
function reverse(s) {
  return [...s].reverse().join('')
}
function helper(s) {
  const man = manachers(s).filter(
    (e, i, ar) => i >= 2 && i < ar.length - 2 && i % 2 === 0
  )
  const n = s.length,
    { max } = Math
  const ints = man.map((e, i) => [i - ~~(e / 2), i + ~~(e / 2)])
  const arr = Array(n).fill(0)
  for (const [a, b] of ints) {
    arr[b] = max(arr[b], b - a + 1)
  }
  for (let i = n - 2; i >= 0; i--) {
    arr[i] = max(arr[i], arr[i + 1] - 2)
  }
  let tmp = 0
  for (let i = 0; i < n; i++) {
    if (arr[i] > tmp) {
      tmp = arr[i]
    } else arr[i] = tmp
  }
  return arr
}
function manachers(s) {
  const str = `@#${s.split('').join('#')}#$`
  const arr = Array(str.length).fill(0)

  let center = 0,
    right = 0
  for (let i = 1, n = str.length; i < n - 1; i++) {
    if (i < right) {
      arr[i] = Math.min(right - i, arr[2 * center - i])
    }
    while (str[i + arr[i] + 1] === str[i - arr[i] - 1]) {
      arr[i] += 1
    }
    if (i + arr[i] > right) {
      center = i
      right = i + arr[i]
    }
  }

  return arr
}
