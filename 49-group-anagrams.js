/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const resp = new Array(),
    termsGrouped = new Map()
  strs.forEach((term) => {
    const hashed = hash(term)
    if (!termsGrouped.has(hashed)) termsGrouped.set(hashed, new Array())
    termsGrouped.get(hashed).push(term)
  })
  termsGrouped.forEach((terms) => {
    resp.push(terms)
  })
  return resp
}

const hash = (term) => {
  const arr = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for(let i = 0, len = term.length; i < len; i++) {
    arr[term[i].charCodeAt(0) - a]++
  }
  return arr.join('-')
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
