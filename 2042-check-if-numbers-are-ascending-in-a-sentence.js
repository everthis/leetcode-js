/**
 * @param {string} s
 * @return {boolean}
 */
const areNumbersAscending = function(s) {
  const arr =s.split(' ')
  const f = arr.filter(e => !Number.isNaN(+e)).map(e => +e)
  let res = true
  for(let i = 1; i < f.length; i++) {
    if(f[i] <= f[i - 1]) return false
  }
  
  return res
};
