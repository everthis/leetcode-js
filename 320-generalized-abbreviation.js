/**

Write a function to generate the generalized abbreviations of a word. 
Note: The order of the output does not matter.

Example:

Input: "word"
Output:
["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]

*/

/**
 * @param {string} word
 * @return {string[]}
 */
const generateAbbreviations = function(word) {
  const arr = []
  bt(arr, word, 0, '', 0)
  return arr
};

function bt(res, word, pos, cur, cnt) {
  if(pos === word.length) {
    if(cnt > 0) cur += cnt
    res.push(cur)
  } else {
    bt(res, word, pos + 1, cur, cnt + 1)
    bt(res, word, pos + 1, cur + (cnt > 0 ? cnt : '') + word.charAt(pos), 0)
  }
}
