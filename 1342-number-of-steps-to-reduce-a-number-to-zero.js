/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
  let res = 0
  while(num !== 0) {
    if(num % 2 === 0) {
      num /= 2
    } else num--
    res++
  }
  
  return res
};
