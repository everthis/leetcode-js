/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function(name, typed) {
  let i = 0, m = name.length, n = typed.length
  for(let j = 0; j < n; j++) {
    if(i < m && name[i] === typed[j]) i++
    else if(j === 0 || typed[j] !== typed[j - 1]) return false
  }
  return i === m
};
