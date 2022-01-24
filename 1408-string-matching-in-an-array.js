/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function(words) {
  const res = [], n = words.length
  for(let i = 0; i < n; i++) {
    const cur = words[i]
    for(let j = 0; j < n; j++) {
      if(i !== j && words[j].indexOf(cur) !== -1) {
        res.push(cur); 
        break
      }
    }
  }
  return res
};
