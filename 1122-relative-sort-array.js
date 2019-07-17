/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  const hash = {}
  const res = []
  arr1.forEach(el => {
    if(hash.hasOwnProperty(el)) hash[el] += 1
    else hash[el] = 1
  })
  for(let i = 0, len = arr2.length; i < len; i++) {
    res.push(...makeArr(arr2[i], hash[arr2[i]]))
    delete hash[arr2[i]]
  }
  const keys = Object.keys(hash).sort((a, b) => a - b)
  for(let i = 0, len = keys.length; i < len; i++) {
    res.push(...makeArr(keys[i], hash[keys[i]]))
  }
  return res
};

function makeArr(el, num) {
  return new Array(num).fill(el)
}
