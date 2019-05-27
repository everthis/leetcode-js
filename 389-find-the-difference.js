/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
  let xor = 0
  for(let i = 0, len = s.length; i < len; i++) xor = xor ^ s.charCodeAt(i) ^ t.charCodeAt(i)
  xor = xor ^ t.charCodeAt(t.length - 1)
  return String.fromCharCode(xor)
};

// another

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
  const arr = s.split("");
  let idx;
  for (let i = 0; i < t.length; i++) {
    idx = arr.indexOf(t[i]);
    if (idx === -1) {
      return t[i];
    } else {
      arr.splice(idx, 1);
    }
  }
};

console.log(findTheDifference("abcd", "abcde"));
