/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  const set = new Set()
  
  for(const e of s) {
    if(set.has(e)) return e
    else set.add(e)
  }
};
