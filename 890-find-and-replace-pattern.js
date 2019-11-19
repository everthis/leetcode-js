/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = (words, pattern) => {
  return words.reduce((acc, item, index) => {
    if (compose(words[index], pattern)) acc.push(words[index]);
    return acc;
  }, []);

  function compose(element, pattern) {
    const s = new Set();
    const m = new Map();
    for (let i = 0; i < element.length; i++) {
      const e = element[i];
      const p = pattern[i];
      s.add(e);
      if (m.get(p) === undefined) {
        m.set(p, e);
      } else if (m.get(p) !== e) {
        return false;
      }
    }
    return m.size === s.size;
  }
};

// anoother

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function(words, pattern) {
  const p = helper(pattern);
  const res = [];
  for (let w of words) {
    if (arrEqual(helper(w), p)) res.push(w);
  }
  return res;
};

function arrEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0, len = a.length; i < len; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function helper(w) {
  const m = new Map();
  const n = w.length;
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (!m.has(w[i])) m.set(w[i], m.size);
    res[i] = m.get(w[i]);
  }
  return res;
}
