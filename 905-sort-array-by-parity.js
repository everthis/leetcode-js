/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
    for(let i = 0, len = A.length; i < len;) {
      if(A[i] % 2 !== 0) {
        A.push(A[i])
        A.splice(i, 1)
        len--
      } else {
        i++
      }
    }
    return A
}; 
