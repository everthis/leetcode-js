/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const buddyStrings = function(A, B) {
    if(A.length !== B.length) return false
    const aCode = ('a').charCodeAt(0)
    if(A === B) {
       const count = new Array(26).fill(0)
       for(let i = 0; i < A.length; i++) {
         count[A.charCodeAt(i) - aCode]++
       }
       for(let el of count) {
         if(el > 1) return true
       }
       return false
    } else {
      const arr = []
      for(let i = 0; i < A.length; i++) {
        if(A[i] !== B[i]) {
           arr.push(i)
           if(arr.length > 2) return false
        }
      }
      if(arr.length !== 2) return false
      return A[arr[0]] === B[arr[1]] && A[arr[1]] === B[arr[0]]
    }
};
