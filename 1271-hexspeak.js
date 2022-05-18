/**
 * @param {string} num
 * @return {string}
 */
var toHexspeak = function(num) {
  const hex = ((+num)).toString(16).toUpperCase()
  let res = ''
  for(let ch of hex) {
    if(ch > '1' && ch <= '9') return 'ERROR'
    else if(ch === '0') res += 'O'
    else if(ch === '1') res += 'I'
    else res += ch
  }
  return res
};
