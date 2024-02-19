/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  const is = kmp(s, a)
  if (is.length === 0) return []
  
  const js = kmp(s, b)
  if (js.length === 0) return []

  const res = []
  let p = 0
  let q = 0

  while (p < is.length && q < js.length) {
    const distance = Math.abs(is[p] - js[q])

    if (distance <= k) {
      res.push(is[p])
      p++
    } else if (is[p] < js[q]) {
      p++
    } else {
      q++
    }
  }

  return res
}

function kmp(str1, str2) {
  const pattern = buildPattern(str2)

  const res = []
  let i = 0
  let j = 0

  while (i < str1.length) {
    if (str1[i] === str2[j]) {
      i++
      j++
      if (j === str2.length) {
        res.push(i - str2.length)
        j = pattern[j - 1]
      }
    } else if (j > 0) {
      j = pattern[j - 1]
    } else {
      i++
    }
  }

  return res
}

function buildPattern(str) {
  const pattern = new Array(str.length).fill(0)
  let i = 1
  let j = 0

  while (i < str.length) {
    if (str[i] === str[j]) {
      j++
      pattern[i] = j
      i++
    } else if (j > 0) {
      j = pattern[j - 1]
    } else {
      i++
    }
  }

  return pattern
}


// another

/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  let res = []
  let v1 = []
  let v2 = []
  getPatternMatchingIndex(s, a, v1)
  getPatternMatchingIndex(s, b, v2)
  for (let i = 0, j = 0; i < v1.length; i++) {
    while (j < v2.length && v1[i] > v2[j] && Math.abs(v1[i] - v2[j]) > k) {
      j++
    }
    if (j < v2.length && Math.abs(v1[i] - v2[j]) <= k) {
      res.push(v1[i])
    }
  }
  return res
}

function getPatternMatchingIndex(s, a, v) {
  let t = a + '@' + s
  let lps = [0]
  for (let i = 1; i < t.length; i++) {
    let ind = lps[i - 1]
    while (ind > 0 && t[ind] !== t[i]) {
      ind = lps[ind - 1]
    }
    lps.push(t[ind] === t[i] ? ind + 1 : 0)
  }
  for (let i = 0; i < lps.length; i++) {
    if (lps[i] === a.length) {
      v.push(i - 2 * a.length)
    }
  }
}
