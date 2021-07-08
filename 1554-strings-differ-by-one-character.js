/**
 * @param {string[]} dict
 * @return {boolean}
 */
 const differByOne = function(dict) {
  const n = dict.length, m = dict[0].length
  for (let j = 0; j < m; j++) {
    const seen = new Set()
    for(let i = 0; i < n; i++) {
      const newStr = dict[i].slice(0, j) + '*' + dict[i].slice(j + 1)
      if(seen.has(newStr)) return true
      seen.add(newStr)
    }
  }

  return false  
};
