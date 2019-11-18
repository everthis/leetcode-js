/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = function(S) {
  if(S === '' || S == null) return 0
  const len = S.length
  const h = {
    o: 0,
    c: 0
  }
  for(let i = 0; i < len; i++) {
    if(S[i] === '(') {
      h.o++
    } else {
      if(h.o > 0) {
        h.o--
      } else {
        h.c++
      }
    }
  }
  
  return h.o + h.c
};
