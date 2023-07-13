/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  const factorial = Array(n + 1).fill(0)
  factorial[0] = 1
  for(let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i
  }
  let res = ''
  const visited = Array(n + 1).fill(0)
  dfs(0)
  return res
    
  function dfs(idx) {
    if(idx === n) return
    
    const cnt = factorial[n - idx - 1]
    for(let i = 1; i <= n; i++) {
      if(visited[i]) continue
      if(cnt < k) {
          k -= cnt
          continue
      }
      res += i
      visited[i] = 1
      dfs(idx + 1)
      return
    }
  }
};

// another

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  const factorial = Array(n + 1).fill(0)
  factorial[0] = 1
  for(let i = 1, pre = 1; i <= n; i++) {
    factorial[i] = pre * i
    pre = factorial[i]
  }
  const nums = Array.from({length: n}, (_, i) => i + 1)
  
  let res = ''
  k--
  for(let i = 1; i <= n; i++) {
     const idx = ~~(k / factorial[n - i])
     res += nums[idx]
     nums.splice(idx, 1)
     k -= idx * factorial[n - i]
  }
  
  return res
};

// another

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  const fact = []
  const nums = []
  for(let i = 1; i <= n; i++) {
    nums.push(i)
  }
  fact[0] = 1
  for(let i = 1, tmp = 1; i <= n; i++) {
    tmp *= i
    fact[i] = tmp
  }
  let res = ''
  k--
  for(let i = 1; i <= n; i++) {
    const idx = ~~(k / fact[n - i])
    res += nums[idx]
    nums.splice(idx, 1)
    k -= idx * fact[n - i]
  }
  
  return res
};

// another

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
  let sb = ''
  const num = []
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
    num.push(i)
  }
  for (let i = 0, l = k - 1; i < n; i++) {
    fact = Math.floor(fact / (n - i))
    const index = Math.floor(l / fact)
    sb += num.splice(index, 1)[0]
    l -= index * fact
  }
  return sb
}

// another

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  const factorial = []
  const nums = []
  let res = ''
  factorial[0] = 1
  for(let i = 1, sum = 1; i <= n; i++) {
    sum *= i
    factorial[i] = sum
  }
  for(let i = 1; i <= n; i++) {
    nums.push(i)
  }
  k--
  for(let i = 0; i <= n; i++) {
    const idx = ~~(k / factorial[n - i])
    res += nums[idx]
    nums.splice(idx, 1)
    k -= idx * factorial[n - i]
  }

  return res
};
