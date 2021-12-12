/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = function(rings) {
  const hash = {}
  
  for(let i = 0, n = rings.length; i < n; i+=2) {
    const ch = rings[i], num = +rings[i + 1]
    if(hash[num] == null) hash[num] = new Set()
    hash[num].add(ch)
  }
  
  
  
  let res = 0
  Object.keys(hash).forEach(k => {
    if(hash[k].size === 3) res++
  })
  
  return res
};
