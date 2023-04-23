/**
 * @param {number} n
 * @return {number}
 */
const sumOfMultiples = function(n) {
  let res = 0
  const set = new Set()
  for(let i = 3; i <= n; i += 3) {
    set.add(i)
  }
  
  for(let i = 5; i <= n; i += 5) {
    set.add(i)
  }
  
  for(let i = 7; i <= n; i += 7) {
    set.add(i)
  }
  
  for(const e of set) {
    res += e
  }
  
  return res
};
