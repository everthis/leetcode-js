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
  const primeLetterNumbers = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
  ]
  let accum = 1
  for (let letter of term) {
    const primeIndex = letter.charCodeAt(0) - 'a'.charCodeAt(0)
    const primeMapping = primeLetterNumbers[primeIndex]
    accum *= primeMapping
  }
  return accum
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
