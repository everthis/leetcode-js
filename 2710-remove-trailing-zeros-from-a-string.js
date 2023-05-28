/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    const n = num.length
    let idx = n
    for(let i = n - 1; i >= 0; i--) {
      if(num[i] === '0') idx = i
      else break
    }
    
    return num.slice(0, idx)
};
