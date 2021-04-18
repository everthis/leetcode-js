/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
  const hash = new Map()
  for(let ch of sentence) {
    if(!hash.has(ch)) hash.set(ch, 0)
    hash.set(ch, hash.get(ch) + 1)
  }
  return hash.size >= 26
};
