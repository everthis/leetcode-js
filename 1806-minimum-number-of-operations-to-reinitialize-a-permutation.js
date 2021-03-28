/**
 * @param {number} n
 * @return {number}
 */
const reinitializePermutation = function(n) {
  let perm = []
  for(let i = 0; i < n; i++) {
    perm[i] = i
  }
  let clone = perm.slice()
  let res = 0
  
  while(true) {
    res++
    let arr = clone.slice()
    for(let i = 0; i < clone.length; i++) {
      if(i % 2 === 0) arr[i] = clone[i / 2]
      else arr[i] = clone[n / 2 + (i - 1) / 2]
    }
    
    if(chk(perm, arr)) break
    clone = arr
  }
  
  
  return res
  
  function chk(a1, a2) {
    for(let i = 0, len = a1.length; i < len; i++) {
      if(a1[i] !== a2[i]) return false
    }
    return true
  }
};
