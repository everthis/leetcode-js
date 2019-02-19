/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function(s) {
  if (!s || s.length < 10) {
    return [];
  }
  const map = new Map([["A", 0], ["C", 1], ["G", 2], ["T", 3]]);
  const dna = new Set();
  const repeated = new Set();
  const mask = 0xfffff;
  let cur = 0;
  for (let i = 0, n = s.length; i < n; i++) {
    cur <<= 2;
    cur = cur | map.get(s[i]);
    cur = cur & mask;
    if (i >= 9) {
      if (dna.has(cur)) {
        const seq = s.slice(i - 9, i + 1);
        if (!repeated.has(seq)) {
          repeated.add(seq);
        }
      } else {
        dna.add(cur);
      }
    }
  }
  return Array.from(repeated);
};

// another

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function(s) {
    let store = new Set(), result = new Set()
    for(let i = 0; i < s.length - 9; i++) {
        const str = s.substring(i, i + 10)
        if(store.has(str)) {
            result.add(str)
        } else {
            store.add(str)
        }
    }
    return Array.from(result)
};
