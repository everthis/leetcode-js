/**
 * @param {string} s
 * @return {number}
 */
const findTheLongestBalancedSubstring = function(s) {
   let res = 0
   
   const n = s.length
   for(let i = 0; i < n - 1; i++) {
     for(let j = i + 1; j < n; j++) {
       const str = s.slice(i, j + 1)
       if(valid(str)) {
         res = Math.max(res, str.length)
       }
     }
   }
   
   return res
  
  function valid(str) {
    let res = true
    const len = str.length
    if(len % 2 === 1) return false
    const lastZeroIdx = str.lastIndexOf('0')
    const firstOneIdx = str.indexOf('1')
    
    return firstOneIdx - lastZeroIdx === 1 && len / 2 === firstOneIdx
  }
};
