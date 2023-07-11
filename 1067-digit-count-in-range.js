/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const digitsCount = function(d, low, high) {
  return countDigit(high, d) - countDigit(low - 1, d)
};
function countDigit(limit, d) {
  let res = 0
  const str = `${limit}`
  const len = str.length
  const { pow } = Math
  if(d === 0) {
    for(let i = 1; i < len; i++) {
      const pre = ~~(limit / pow(10, i))
      const post = pow(10, i - 1)
      res += (pre - 1) * post
      const e = +str[len - i]
      if(e > d) {
        res += post
      } else if(e === d) {
        res += (limit % post) + 1
      }
    }    
  } else {
    for(let i = 1; i <= len; i++) {
      const pre = ~~(limit / pow(10, i))
      const post = pow(10, i - 1)
      res += pre * post
      const e = +str[len - i]
      if(e > d) {
        res += post
      } else if(e === d) {
        res += (limit % post) + 1
      }
    }  
  }
  
  
  return res
}


// another

/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const digitsCount = function (d, low, high) {
  return countDigit(high, d) - countDigit(low - 1, d)

  function countDigit(n, d) {
    if (n < 0 || n < d) {
      return 0
    }
    let count = 0
    for (let i = 1; i <= n; i *= 10) {
      let divider = i * 10
      count += ((n / divider) >> 0) * i
      if (d > 0) {
        // tailing number need to be large than d *  i to qualify.
        count += Math.min(Math.max((n % divider) - d * i + 1, 0), i)
      } else {
        if (n / divider > 0) {
          if (i > 1) {
            // when d == 0, we need avoid to take numbers like 0xxxx into account.
            count -= i
            count += Math.min((n % divider) + 1, i)
          }
        }
      }
    }
    return count
  }
}
