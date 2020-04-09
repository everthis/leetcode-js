/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
  return chk(S) === chk(T)
};

function chk(str) {
  const s = []
  for(let i = 0, len = str.length; i < len; i++) {
    if(str[i] === '#') s.pop()
    else s.push(str[i])
  }
  return s.join('')
}
