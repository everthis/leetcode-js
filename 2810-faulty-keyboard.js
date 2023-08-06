/**
 * @param {string} s
 * @return {string}
 */
const finalString = function(s) {
  const arr = []
  for(const ch of s) {
    if(ch === 'i') {
      arr.reverse()
    } else {
      arr.push(ch)
    }
  }
  
  return arr.join('')
};
