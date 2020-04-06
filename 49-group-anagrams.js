/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const hash = new Map()
  for (let str of strs) {
    let key = 0
    for (let char of str) {
      const idx = char.charCodeAt(0)
      key += Math.pow(idx, 4)
    }
    if (!hash.has(key)) hash.set(key, [str])
    else {
      hash.set(key, hash.get(key).concat(str))
    }
  }
  return Array.from(hash.values())
}


// another

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
