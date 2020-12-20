/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = function(number) {
  let str = number.replace(/\-/g, '')
  str = str.split(' ').join('')
  const n = str.length
  const re = n % 3
  let lo = 0, hi = 0
  let tmp = []
  if(re === 1) {
    hi = n - 5
    tmp.push(str.slice(n - 4, n - 2), str.slice(n - 2))
  } else if(re === 2) {
    hi = n - 3
    tmp.push(str.slice(n - 2))
  } else {
    hi = n - 1
  }
  const res = []
  for(let i = lo; i <= hi; i += 3) {
    res.push(str.slice(i, i + 3))
  }
  
 res.push(...tmp)
    
  return res.join('-')
};
