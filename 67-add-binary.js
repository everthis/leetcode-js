/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    let s = ''
    let c = 0
    let i = a.length - 1
    let j = b.length - 1
    while(i >= 0 || j >= 0 || c === 1) {
        c += i >= 0 ? +a[i--] : 0
        c += j >= 0 ? +b[j--] : 0
        s = (c % 2 === 1 ? '1' : '0') + s
        c = Math.floor(c / 2)
    }
    return s
};

// another

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let next = false
  let res = []
  let ai = a.length - 1
  let bi = b.length - 1
  while((ai >= 0 && bi >=0) || next) {
    const tmp = (ai >= 0 ? +a[ai--] : 0) + (bi >= 0 ? +b[bi--] : 0) + (next ? 1 : 0)
    if(tmp > 1) next = true
    else next = false
    res.unshift('' + (tmp % 2))
  }

  while(ai >= 0) res.unshift(a[ai--])
  while(bi >= 0) res.unshift(b[bi--])
  
  return res.join('')
};
