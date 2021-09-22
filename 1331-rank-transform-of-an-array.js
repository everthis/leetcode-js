/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function(arr) {
  const hash = {}
  for(let e of arr) {
    hash[e] = 1
  }
  const keys = Object.keys(hash)
  keys.sort((a, b) => a - b)
  const rank = {}
  for(let i = 0, n= keys.length; i < n; i++) {
    rank[keys[i]] = i + 1
  }
  
  return arr.map(e => rank[e])
};
