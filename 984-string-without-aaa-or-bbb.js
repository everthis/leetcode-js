/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const strWithout3a3b = function (a, b) {
  let res = ''

  while(a > 0 || b > 0) {
    if(endsWith(res, 'aa')) {
      res += 'b'
      b--
    } else if(endsWith(res, 'bb')) {
      res += 'a'
      a--
    } else if(a >= b) {
      res += 'a'
      a--
    } else {
      res += 'b'
      b--
    }
  }

  return res

  function endsWith(str, sub) {
    let i = str.length - 1, j = sub.length - 1
    for(; i >=0 && j >= 0;i--,j--) {
      if(str[i] !== sub[j]) return false
    }
    if(j >= 0) return false

    return true
  }
}

// another


/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const strWithout3a3b = function(a, b) {
  let m = a, n = b, ch1 = 'a', ch2 = 'b'
  if(b > a) {
    m = b, n = a, ch1 = 'b', ch2 = 'a'
  }
  let res = ''
  while(m-- > 0) {
    res += ch1
    if(m > n) {
      res += ch1
      m--
    }
    if(n > 0) {
      res += ch2
      n--
    }
  }
  return res
};

// another

/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const strWithout3a3b = function (a, b, ac = 'a', bc = 'b') {
  const delta = a - b
  let res = ''
  if (delta < 0) {
    return strWithout3a3b(b, a, 'b', 'a')
  } else {
    while(a-- > 0) {
      res += ac
      if(a > b) res += ac, a--
      if(b-- > 0) res += bc
    }
  }

  return res
}
