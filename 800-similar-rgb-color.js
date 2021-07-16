/**
 * @param {string} color
 * @return {string}
 */
const similarRGB = function(color) {
  const candidates = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff']
  const r = color.slice(1, 3), g = color.slice(3, 5), b = color.slice(5, 7)
  
  return `#${min(r)}${min(g)}${min(b)}`
  
  function min(str) {
    let res = '', max = Infinity
    for(let s of candidates) {
      const tmp = Math.abs(parseInt(s, 16) - parseInt(str, 16))
      if(tmp < max) {
        max = tmp
        res = s
      }
    }
    return res
  }
};
