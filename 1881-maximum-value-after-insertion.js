/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
const maxValue = function(n, x) {
  const neg = n[0] === '-'
  if (neg) {
    for(let i = 1; i < n.length; i++) {
      if(+n[i] > x) {
        return n.slice(0, i) + x + n.slice(i)
      }
    }
    return n + x
  } else {
    for(let i = 0; i < n.length; i++) {
      if(+n[i] < x) {
        
        return n.slice(0, i) + x + n.slice(i)
      }
    }
    return n + x
  }
};
