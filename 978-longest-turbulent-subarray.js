/**
 * @param {number[]} arr
 * @return {number}
 */
const maxTurbulenceSize = function(arr) {
  const n = arr.length
  
  return Math.max(helper(), helper1())
  // < > <
  function helper() {
    const cnt = Array(n).fill(1)
    
    for(let i = 0; i < n - 1; i++) {
      if(i % 2 === 1 && arr[i] > arr[i + 1]) {
        cnt[i + 1] = cnt[i] + 1
      } else if(i % 2 === 0 && arr[i] < arr[i + 1]) {
        cnt[i + 1] = cnt[i] + 1
      }
    }
    
    return Math.max(...cnt)
  }
  
  function helper1() {
    const cnt = Array(n).fill(1)
    
    for(let i = 0; i < n - 1; i++) {
      if(i % 2 === 1 &&  arr[i] < arr[i + 1] ) {
        cnt[i + 1] = cnt[i] + 1
      } else if(i % 2 === 0 && arr[i] > arr[i + 1] ) {
        cnt[i + 1] = cnt[i] + 1
      }
    }
    
    return Math.max(...cnt)
  }
};
