/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
const garbageCollection = function(garbage, travel) {
  let res1 = 0, res2 = 0, res3 = 0
  const n = garbage.length
  // P
  res1 = helper('P')
    res2 = helper('M')
    res3 = helper('G')
  return res1 + res2 + res3
  
  function helper(target) {
      const arr = []
      for(let i = 0; i < n; i++) {
        const str = garbage[i]
        for(const e of str) {
          if(e === target) arr.push(e)
        }
        if(i + 1 < n) arr.push(travel[i])
      }
      const idx = arr.indexOf(target)
      const lastIdx =arr.lastIndexOf(target)
      let tmp = 0
      // console.log(arr, idx, lastIdx)
      for(let i = 0; i >= 0 && i<=lastIdx; i++) {
        const e = arr[i]
        if(e === target) tmp += 1
        else tmp += e
      }
    return tmp
  }
};
