/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const minCharacters = function (a, b) {
  const n1 = a.length,
    n2 = b.length
  const cnt1 = Array(26).fill(0)
  const cnt2 = Array(26).fill(0)
  const aCode = 'a'.charCodeAt(0)
  for (let c of a) ++cnt1[c.charCodeAt(0) - aCode]
  for (let c of b) ++cnt2[c.charCodeAt(0) - aCode]
  let res = n1 - Math.max(...cnt1) + n2 - Math.max(...cnt2)
  for (let i = 0; i < 25; ++i) {
    let cur1 = 0,
      cur2 = 0
    for (let j = 0; j < 26; ++j) {
      if (j <= i) {
        cur1 += cnt2[j]
        cur2 += cnt1[j]
      } else {
        cur1 += cnt1[j]
        cur2 += cnt2[j]
      }
    }
    res = Math.min(Math.min(cur1, cur2), res)
  }
  return res
}

// another

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const minCharacters = function(a, b) {
  return Math.min(method1(a, b), method1(b, a), method3(a, b))
};

function method1(str1, str2) {
  let res = Infinity, a = 'a'.charCodeAt(0)
  for(let i = 1; i < 26; i++) {
    let cnt1 = 0, cnt2 = 0, mid = String.fromCharCode(a + i)
    for(let ch of str1) {
      if(ch >= mid) cnt1++ 
    }
    for(let ch of str2) {
      if(ch < mid) cnt2++
    }
    res = Math.min(res, cnt1 + cnt2)
  }
  return res
}

function method3(str1, str2) {
  const a = 'a'.charCodeAt(0)
  const cnt1 = Array(26).fill(0), cnt2 = Array(26).fill(0)
  for(let ch of str1) cnt1[ch.charCodeAt(0) - a]++
  for(let ch of str2) cnt2[ch.charCodeAt(0) - a]++
  return str1.length + str2.length - Math.max(...cnt1) - Math.max(...cnt2)
}

// another

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const minCharacters = function (a, b) {
  const m = a.length, n = b.length
  let res = m + n
  const cnt1 = Array(26).fill(0), cnt2 = Array(26).fill(0)
  const ac = 'a'.charCodeAt(0)
  for(let ch of a) cnt1[ch.charCodeAt(0) - ac]++
  for(let ch of b) cnt2[ch.charCodeAt(0) - ac]++
  const c3 = res - Math.max(...cnt1) - Math.max(...cnt2)
  for(let i = 0; i < 26; i++) {
    if(i > 0) {
      cnt1[i] += cnt1[i - 1]
      cnt2[i] += cnt2[i - 1]      
    }

    if(i < 25) {
      res = Math.min(res, m - cnt1[i] + cnt2[i])
      res = Math.min(res, n - cnt2[i] + cnt1[i])
    }
  }
  
  return Math.min(res, c3)
}


