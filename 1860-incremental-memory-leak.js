/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
const memLeak = function(memory1, memory2) {
  let i = 1
  const res = Array(3).fill(0)
  res[0] = 1
  res[1] = memory1
  res[2] = memory2
  while(true) {
    if(res[1] >= i || res[2] >= i) {
      if(res[1] >= i && res[2] >= i) {
        if(res[1] === res[2]) {
           res[1] -= i
        } else if(res[1] > res[2]) {
          res[1] -= i
        } else {
          res[2] -= i
        }
      } else if(res[1] >= i) {
        res[1] -= i
      } else if(res[2] >= i){
        res[2] -= i
      }
    } else {
      res[0] = i
      return res
    }
    
    i++
  }
};
