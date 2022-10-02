/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const minimizeXor = function(num1, num2) {
  let num = 0
  let n2 = num2
  while(n2 > 0) {
    if(n2 & 1 === 1) num++
    n2 = n2 >>> 1
  }
  
  let arr1 = num1.toString(2).split('').map(e => +e)
  // console.log(arr1)
  let res = Array(arr1.length).fill(0)
  for(let i = 0; i < arr1.length && num > 0; i++) {
    if(arr1[i] === 1) {
      num--
      res[i] = 1
    }
  }
  
  for(let i = arr1.length - 1; i >= 0 && num > 0; i--) {
    if(arr1[i] === 0) {
      num--
      res[i] = 1
    }
  }
  
  while(num) {
    res.unshift(1)
    num--
  }
  
  return Number.parseInt(res.join(''), 2)
};
