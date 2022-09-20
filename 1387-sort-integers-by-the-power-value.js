/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
const getKth = function(lo, hi, k) {
  const arr = []
  
  for(let i = lo; i <= hi; i++) {
    arr.push([helper(i), i])
  }
  
  arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  
  return arr[k - 1][1]
  
  
  function helper(num) {
    let res = 0
    while(num !== 1) {
      if(num % 2 === 0) num /= 2
      else num = num * 3 + 1
      res++
    }
    
    return res
  }
};
