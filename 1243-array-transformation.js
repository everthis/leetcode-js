/**
 * @param {number[]} arr
 * @return {number[]}
 */
 const transformArray = function(arr) {
  let cur = arr
  while(true) {
    const clone = cur.slice()
    for(let i = 1; i < clone.length - 1; i++) {
      if(cur[i] > cur[i - 1] && cur[i] > cur[i + 1]) clone[i]--
      else if(cur[i] < cur[i - 1] && cur[i] < cur[i + 1]) clone[i]++
    }
    if(same(cur, clone)) return clone
    cur = clone
  }
  
  return cur
  
  function same(a1, a2) {
    for(let i = 0; i< a1.length; i++) {
      if(a1[i] !== a2[i]) return false
    }
    return true
  }
};
