 /**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function(arr, queries) {
  const pre = [], n = arr.length
  let xor = arr[0]
  pre.push(xor)
  for(let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] ^ arr[i]
  }

  const res = queries.map((e, i) => {
    const [l, r] = e
    return pre[r] ^ (l > 0 ? pre[l - 1] : 0)
  })
  return res
};

// another

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function(arr, queries) {
  const xorArr = []
  xorArr[0] = 0
  const n = arr.length
  for(let i = 0; i < n; i++) {
    const cur = arr[i]
    xorArr.push(cur ^ xorArr[xorArr.length - 1])
  }
  const res = []
  for(const [l, r] of queries) {
    res.push(xorArr[r + 1] ^ xorArr[l])
  }
  
  return res
};
