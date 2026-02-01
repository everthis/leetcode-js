/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function(n) {
  let res = 0

  for(let i = 0; i <= n; i++) {
    const bi = i.toString(2)
    if(bi.split('1').length - 1 === bi.length || bi.split('0').length - 1 === bi.length) {
      res++
    }
  }

  
  return res
};
