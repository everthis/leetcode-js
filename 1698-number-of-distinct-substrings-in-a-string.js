/**
 * @param {string} s
 * @return {number}
 */
const countDistinct = function(s) {
  const set = new Set()
  for(let i = 0, len = s.length; i < len; i++) {
    for(let j = i + 1; j <= len; j++) {
      set.add(s.slice(i, j))
    }
  }
  
  return set.size
};
