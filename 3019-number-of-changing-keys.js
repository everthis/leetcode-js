/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    const ss = s.toLowerCase()
    let res = 0
    for(let i = 1;i < ss.length; i++) {
      if(ss[i] !== ss[i - 1]) res++
    }
    return res
};
