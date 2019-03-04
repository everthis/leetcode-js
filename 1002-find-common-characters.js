/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function(A) {
    const minArr = minEl(A)
    const res = []
    for(let i = 0; i < minArr[1]; i++) {
      let target = A[minArr[0]][i]
      let all = true
      for(let j = 0; j < A.length; j++) {
        if(j === minArr[0]) continue
        if(all === false) continue
        let idx
        if( (idx = A[j].indexOf(target)) === -1) {
           all = false
        } else {
          A[j] = A[j].slice(0, idx) + A[j].slice(idx + 1)
        }
      }
      if(all) res.push(target)
    }
        
    return res
};

function minEl(arr) {
  const res = [0, Number.MAX_SAFE_INTEGER] // [idx, len]
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length < res[1]) {
       res[0] = i
       res[1] = arr[i].length
    }
  }
  return res
}
