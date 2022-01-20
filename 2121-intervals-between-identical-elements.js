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
