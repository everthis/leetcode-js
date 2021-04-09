/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function(words, order) {
  const mapping = Array(26).fill(0), a = 'a'.charCodeAt(0)
  for(let i = 0, len = order.length; i < len; i++) {
    mapping[order.charCodeAt(i) - a] = i
  }

  for(let i = 1, n = words.length; i < n; i++) {
    if(bigger(words[i - 1], words[i])) return false
  }
  
  return true
  
  function bigger(s1, s2) {
    const n = s1.length, m = s2.length;
    for (let i = 0; i < n && i < m; ++i) {
      if (s1.charAt(i) != s2.charAt(i)) return mapping[s1.charCodeAt(i) - a] > mapping[s2.charCodeAt(i) - a];          
    }

    return n > m;
  }

};
