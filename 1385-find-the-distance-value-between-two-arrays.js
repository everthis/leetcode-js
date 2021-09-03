/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function(arr1, arr2, d) {
  let res = 0
  for(let i = 0, m = arr1.length; i < m; i++) {
    let tmp = false, cur = arr1[i]
    for(let j = 0, n = arr2.length; j < n; j++) {
      if(Math.abs(cur - arr2[j]) <= d) {
        tmp = true
        break
      }
    }
    if(!tmp) res++ 
  }
  
  return res
};
