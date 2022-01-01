/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = function(n) {
  const hash = {}
  const sum = n => `${n}`.split('').reduce((ac, e) => ac + (+e), 0)
  for(let i = 1; i <= n; i++) {
    const tmp = sum(i)
    if(hash[tmp] == null) hash[tmp] = 0
    hash[tmp]++
  }
  // console.log(hash)
  const val = Math.max(...Object.values(hash))
  let res = 0
  Object.keys(hash).forEach(k => {
    if(hash[k] === val) res++
  })
  
  return res
};
