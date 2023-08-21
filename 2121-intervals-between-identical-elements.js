/**
 * @param {number[]} arr
 * @return {number[]}
 */
const getDistances = function(arr) {
  const hash = {}
  const n = arr.length
  for(let i = 0; i < n; i++) {
    const e = arr[i]
    if(hash[e] == null) hash[e] = []
    hash[e].push(i)
  }
  const res = []
  for(const [k, v] of Object.entries(hash)) {
    helper(v)
  }
  return res
  
  function helper(idxArr) {
    let sum = 0
    const len = idxArr.length
    for(let i = 1; i < len; i++) {
      sum += idxArr[i] - idxArr[0]
    }
    const first = idxArr[0]
    res[first] = sum
    for(let i = 1; i < len; i++) {
      const pre = res[idxArr[i - 1]]
      const delta = idxArr[i] - idxArr[i - 1]
      const tmp = pre + i * delta - (len - i) * delta
      res[idxArr[i]] = tmp
    }
  }
};

// another


/**
 * @param {number[]} arr
 * @return {number[]}
 */
const getDistances = function(arr) {
  let n = arr.length
  const pre = Array(n).fill(0), suf = Array(n).fill(0), res = Array(n).fill(0), mp = {}
  
  for(let i = 0; i < n; i++) {
    if(mp[arr[i]] == null) mp[arr[i]] = []
    mp[arr[i]].push(i)
  }

  Object.keys(mp).forEach(k => {
    const idxArr = mp[k]
    for(let i = 1; i < idxArr.length; i++) {
      pre[idxArr[i]] = pre[idxArr[i - 1]] + i * (idxArr[i] - idxArr[i - 1])
    }
  })

  Object.keys(mp).forEach(k => {
    const idxArr = mp[k]
    for(let i = idxArr.length - 2; i >= 0; i--) {
      suf[idxArr[i]] = suf[idxArr[i + 1]] + (idxArr.length - 1 - i) * (idxArr[i + 1] - idxArr[i])
    }
  })

  for(let i = 0; i < n; i++) res[i] = pre[i] + suf[i]

  return res
};
