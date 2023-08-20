/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
const isAcronym = function(words, s) {
  let str = ''
  for(const e of words) str = str + e[0]
  return s === str
};
