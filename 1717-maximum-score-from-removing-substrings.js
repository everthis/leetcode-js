/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = function (s, x, y) {
  let sb = s.split('')
  if (x > y) {
    return remove(sb, 'ab', x) + remove(sb, 'ba', y)
  }
  return remove(sb, 'ba', y) + remove(sb, 'ab', x)
  function remove(sb, pattern, point) {
    let i = 0,
      res = 0
    for (let j = 0; j < sb.length; j++) {
      sb[i++] = sb[j]
      if (
        i > 1 &&
        sb[i - 2] == pattern.charAt(0) &&
        sb[i - 1] == pattern.charAt(1)
      ) {
        i -= 2
        res += point
      }
    }
    sb.splice(i)
    return res
  }
}

// another

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = function (s, x, y) {
  return Math.max(go(s, x, y, 'a', 'b'), go(s, y, x, 'b', 'a'))
}

function go(s, x, y, a, b) {
  const n = s.length
  const st = new Array(n)
  let sc = 0
  let p = 0
  for (let c of s) {
    if (p - 1 >= 0 && st[p - 1] === a && c === b) {
      sc += x
      p--
    } else {
      st[p++] = c
    }
  }
  const st2 = new Array(p)
  let q = 0
  for (let u = 0; u < p; u++) {
    let c = st[u]
    if (q - 1 >= 0 && st2[q - 1] === b && c === a) {
      sc += y
      q--
    } else {
      st2[q++] = c
    }
  }
  return sc
}
