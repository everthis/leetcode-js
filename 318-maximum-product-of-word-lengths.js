/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = function(words) {
  if (words == null || words.length === 0) return 0;
  let len = words.length;
  let value = [];
  for (let i = 0; i < len; i++) {
    let tmp = words[i];
    value[i] = 0;
    for (let j = 0; j < tmp.length; j++) {
      value[i] |= 1 << (tmp.charAt(j).charCodeAt(0) - "a".charCodeAt(0));
    }
  }
  let maxProductNum = 0;
  for (let i = 0; i < len; i++)
    for (let j = i + 1; j < len; j++) {
      if (
        (value[i] & value[j]) === 0 &&
        words[i].length * words[j].length > maxProductNum
      )
        maxProductNum = words[i].length * words[j].length;
    }
  return maxProductNum;
};
