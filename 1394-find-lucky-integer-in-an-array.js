/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function(arr) {
  const hash = {}
  for(let e of arr) hash[e] = (hash[e] || 0) + 1
  let res
  Object.keys(hash).forEach(k => {
    if(+k === hash[k]) {
      if (res == null) res = hash[k]
      else {
        if (hash[k] > res) res = hash[k]
      }
    } 
  })
  return res == null ? -1 : res
};
