/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
  const charMap = {};
  for (let i = 0; i < s.length; i++) {
    const index = s.charAt(i);
    charMap[index] = (charMap[index] || 0) + 1;
  }
  return Object.entries(charMap)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map(x => {
      return x[0].repeat(x[1]);
    })
    .join("");
};
