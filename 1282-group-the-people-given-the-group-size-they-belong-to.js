/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
  const hash = {}
  const n = groupSizes.length
  
  for(let i = 0; i < n; i++) {
    const size = groupSizes[i]
    if(hash[size] == null) hash[size] = []
    hash[size].push(i)
  }
  
  const keys = Object.keys(hash)
  // console.log(hash)
  const res = []
  for(let size of keys) {
    size = +size
    const arr = hash[size]
    for(let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size))
    }
  }
  
  return res
};
