/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);

  let i = 0;
  for (let j = 0; i < g.length && j < s.length; j++) {
    if (g[i] <= s[j]) i++;
  }
  return i;
};
