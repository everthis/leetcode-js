/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  if (strs.length === 0) {
    return [];
  }
  const ans = [];
  const hash = {};
  for (let el of strs) {
    let sel = el
      .split("")
      .sort()
      .join("");
    if (hash.hasOwnProperty(sel)) {
      hash[sel].push(el);
    } else {
      hash[sel] = [el];
    }
  }

  return Object.values(hash);
};
