/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const slen = s.length;
  const plen = p.length;
  if (plen > slen) return [];
  const aCode = "a".charCodeAt(0);
  const count = new Array(26).fill(0);
  for (let i = 0; i < plen; i++) count[p.charCodeAt(i) - aCode] += 1;
  const res = [];
  for (let i = 0; i < slen; i++) {
    count[s.charCodeAt(i) - aCode] -= 1;
    if (i >= plen - 1) {
      if (i - plen >= 0) count[s.charCodeAt(i - plen) - aCode] += 1;
      if (allZero(count)) res.push(i - plen + 1);
    }
  }
  return res;
};
function allZero(count) {
  for (let el of count) {
    if (el !== 0) return false;
  }
  return true;
}
