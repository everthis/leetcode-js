/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = function(tasks) {
  let res = 0
  const hash = {}
  for(let e of tasks) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  const keys = Object.keys(hash).map(e => +e)
  for(const k of keys) {
    if(hash[k] / 3 >= 1) res += ~~(hash[k] / 3)
    if(hash[k] % 3 === 2) res++
    if(hash[k] % 3 === 1) {
      if(hash[k] >= 4) res++
      else return -1
    }
  }
  
  return res
};
