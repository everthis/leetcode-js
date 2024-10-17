/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var countSteppingNumbers = function (low, high) {
  const mod = 1000000007
  let init = () => new Array(101)
    .fill(null)
    .map(() =>
      new Array(2)
        .fill(null)
        .map(() => new Array(2).fill(null).map(() => new Array(11).fill(-1))),
    )
//   console.log(dp)
  const helper = (pos, tight, isZero, prevDigit, s) => {
    if (pos === s.length) {
      if (isZero) return 0
      return 1
    }

    if (dp[pos][tight][isZero][prevDigit + 1] !== -1)
      return dp[pos][tight][isZero][prevDigit + 1]

    let res = 0
    let limit

    if (tight) limit = parseInt(s[pos])
    else limit = 9

    for (let curDigit = 0; curDigit <= limit; curDigit++) {
      let newTight = tight
      if (tight && curDigit < limit) newTight = 0

      let willBeZero = isZero
      if (isZero && curDigit > 0) willBeZero = 0

      if (isZero) {
        res += helper(pos + 1, newTight, willBeZero, curDigit, s)
        res %= mod
      } else {
        if (Math.abs(curDigit - prevDigit) === 1) {
          res += helper(pos + 1, newTight, willBeZero, curDigit, s)
          res %= mod
        }
      }
    }

    dp[pos][tight][isZero][prevDigit + 1] = res
    return res
  }
  let dp = init()
  let l = helper(0, 1, 1, -1, low)

  dp = init()
  let r = helper(0, 1, 1, -1, high)

  let res = r - l
  res = (res + mod) % mod

  let add = true
  for (let i = 1; i < low.length; i++) {
    if (Math.abs(low[i] - low[i - 1]) !== 1) {
      add = false
      break
    }
  }
  if (add) res++

  res %= mod
  return res
}

// another


const minus_mod = (x, y, mod) => ((x - y) % mod + mod) % mod;
const mod = 1e9 + 7, ll = BigInt;
let memo;
const go = (s) => {
    memo = new Map();
    return dfs(0, 0, true, false, s);
};

const dfs = (i, mask, isLimit, isNum, s) => {
    let ke = i + " " + mask + " " + isLimit + " " + isNum;
    if (memo.has(ke)) return memo.get(ke);
    if (i == s.length) return isNum - '0';
    let res = 0;
    if (!isNum) res = dfs(i + 1, mask, false, false, s);
    let leading = isNum ? 0 : 1;
    let up = isLimit ? s[i] - '0' : 9;
    for (let digit = leading; digit <= up; digit++) {
        if (!isNum || Math.abs(digit - mask) == 1) {
            res += dfs(i + 1, digit, isLimit && digit == up, true, s);
        }
    }
    res %= mod;
    memo.set(ke, res);
    return res;
};
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
const countSteppingNumbers = (low, high) => {
    let x = go(high), y = go((ll(low) - 1n).toString());
    return minus_mod(x, y, mod);
};

// another


/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
const countSteppingNumbers = function(low, high) {
  const mod = 1e9 + 7
  let res = 0
  res = (helper(high) - helper(low) + isSteppingNumber(low) + mod) % mod

  return res

  function helper(num) {
    let res = 0
    const n = num.length
    const memo = Array.from({ length: 2 }, () => Array.from({ length: 11 }, () => Array.from({ length: n + 1 }, () => -1)))
    for (let len = 1; len < n; len++) {
        for(let i = 1; i < 10; i++){
          res = (res + dfs(len - 1, i, false, num, memo)) % mod
        }
    }
    const d = num[0] - '0'
    for(let i = 1; i < d; i++){
      res = (res + dfs(n - 1, i, false, num, memo)) % mod
    }
    res = (res + dfs(n - 1, d, true, num, memo)) % mod
    return res
  }
  function dfs(len, prev, isSame, num, memo) {
    if(len === 0) return 1
    if(memo[+isSame][prev][len] !== -1) return memo[+isSame][prev][len]
    let res = 0
    if(isSame){
        const d = num[num.length - len] - '0'
        if(prev + 1 < d) res = (res + dfs(len - 1, prev + 1, false, num, memo)) % mod
        else if(prev + 1 === d) res = (res + dfs(len - 1, prev + 1, true, num, memo)) % mod
        if(prev - 1 >= 0 && prev - 1 < d) res = (res + dfs(len - 1, prev - 1, false, num, memo)) % mod
        else if(prev - 1 === d) res = (res + dfs(len - 1, prev - 1, true, num, memo)) % mod


    } else {
        if(prev + 1 < 10) res = (res + dfs(len - 1, prev + 1, false, num, memo)) % mod
        if(prev - 1 >= 0) res = (res + dfs(len - 1, prev - 1, false, num, memo)) % mod
    }

    memo[+isSame][prev][len] = res

    return res
  }
  function isSteppingNumber(num){
    if(num.length === 1) return 1
    for(let i = 1; i < num.length; i++){
      if(Math.abs(num[i] - num[i - 1]) !== 1) return 0
    }
    return 1
  }
};


