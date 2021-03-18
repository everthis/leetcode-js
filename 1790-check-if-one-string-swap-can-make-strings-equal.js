/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function(s1, s2) {
  if (s1 === s2) return true
  let arr = []
  for(let i = 0, len = s1.length; i < len; i++) {
    if(s1[i] !== s2[i]) arr.push(i)
    
    if(arr.length > 2) return false
  }
  
  if(arr.length === 1) return false
  const [i1, i2] = arr
  if(s1[i2] === s2[i1] && s1[i1] === s2[i2]) return true
  return false
};
