/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
  const fn = arr => arr.map(e => e.split(':').map(e => +e).reduce((ac,e,i) => i === 0 ? ac + 60 * e : ac + e, 0))
  const arr1 = fn(event1)
  const arr2 = fn(event2)
  const hash = {}
  
  if(hash[arr1[0]] == null) hash[arr1[0]] = 0
  hash[arr1[0]]++
  
  if(hash[arr1[1] + 1] == null) hash[arr1[1] + 1] = 0
  hash[arr1[1] + 1]--
  
  if(hash[arr2[0]] == null) hash[arr2[0]] = 0
  hash[arr2[0]]++
  
  if(hash[arr2[1] + 1] == null) hash[arr2[1] + 1] = 0
  hash[arr2[1] + 1]--
  
  const keys = Object.keys(hash).map(e => +e)
  keys.sort((a, b) => a - b)
  
  let num = 0
  for(let i = 0; i < keys.length; i++) {
    num += hash[keys[i]]
    if(num > 1) return true
  }
  
  // const arr = [].concat(arr1, arr2)
  // arr.sort((a, b) => a - b)
  // if(arr2[1] >= arr1[0] && arr2[0] <= arr1[1]) return true
  // if(arr2[1] >= arr1[1] && arr2[0] <= arr1[1]) return true
  return false
};
