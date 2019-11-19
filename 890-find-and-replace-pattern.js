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
