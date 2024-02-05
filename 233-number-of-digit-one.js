/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
  let res = 0
  const s = `${n}`
  const len = s.length, {floor, pow} = Math

  for(let i = 1; i <= len; i++) {
    const np = pow(10, i - 1)
    const pre = floor(n / pow(10, i))
    const remain = n % np
    
    res += pre * np
    const e = +s[len - i]
    if(e > 1) {
        res += np
    } else if(e === 1) {
        res += remain + 1
    }
  }

  return res
};


// another


/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
  let res = 0
  const str = `${n}`
  const len = str.length, { pow } = Math
  
  for(let i = 1; i <= len; i++) {
    const pre = ~~(n / pow(10, i))
    const remain = n % (pow(10, i - 1))
    const post = pow(10, i - 1)
    res += pre * post
    const e = +(str[len - i])
    if(e > 1) {
      res += pow(10, i - 1)
    } else if(e === 1) {
      res += remain + 1
    }
  }
  
  return res
};


// another

/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
    return countNum(1, n + 1)
};

// Counts the number of `digit` in the range [0, limit)
function countNum( digit,  limit) {
  let count = 0;
  let factor = 1;
  let tail = 0;
  while (limit >= 10) {
    let d = limit % 10;
    limit = ~~(limit / 10);
    count += limit * factor;
    count += d > digit ? factor : d == digit ? tail : 0;
    tail += d * factor;
    factor *= 10;
  }
  return count + (limit > digit ? factor : limit == digit ? tail : 0);
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
  let count = 0
  for (let m = 1; m <= n; m *= 10) {
    const a = Math.floor(n / m)
    const b = n % m
    if (a % 10 > 1) {
      count += (Math.floor(a / 10) + 1) * m
    } else if (a % 10 === 1) {
      count += Math.floor(a / 10) * m + b + 1
    } else {
      count += Math.floor(a / 10) * m
    }
  }
  return count
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function (n) {
  if (n <= 0) return 0
  let ones = 0
  for (let i = 1, q = n; i <= n; i *= 10, q = (q / 10) >> 0) {
    const pre = (n / (i * 10)) >> 0,
      cur = q % 10,
      suf = n % i
    ones += pre * i
    ones += 1 < cur ? i : 1 == cur ? suf + 1 : 0
  }
  return ones
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
  let res = 0, factor = 1, lower = 0, cur = 0, higher = 0
  while(~~(n / factor) !== 0) {
    lower = n - (~~(n / factor)) * factor
    cur = (~~(n / factor)) % 10
    higher = ~~(n / (factor * 10))
    switch(cur) {
      case 0:
        res += higher * factor
        break
      case 1:
        res += higher * factor + lower + 1
        break
      default:
        res += (higher + 1) * factor
        break
    }
    factor *= 10
  }
  
  return res
};
