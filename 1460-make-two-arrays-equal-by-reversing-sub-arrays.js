/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function(target, arr) {
  if(target.length !== arr.length) return false
  const tHash = {}, aHash = {}
  for(let i = 0, len = arr.length; i < len;i++) {
    const t = target[i], a = arr[i]
    if(tHash[t] == null) tHash[t] = 0
    if(aHash[a] == null) aHash[a] = 0
    tHash[t]++
    aHash[a]++
  }
  
  const keys = Object.keys(tHash)
  for(let k of keys) {
    if(tHash[k] !== aHash[k]) return false 
  }
  
  return true
};
