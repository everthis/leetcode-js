/**
 * @param {string} word
 * @return {number}
 */
const wonderfulSubstrings = function (word) {
  const n = word.length,
    a = 'a'.charCodeAt(0)
  const map = new Map()
  map.set(0, 1)
  let res = 0
  for (let i = 0, mask = 0; i < n; i++) {
    const idx = word[i].charCodeAt(0) - a
    mask ^= 1 << idx
    res += (map.get(mask) || 0) 
    for (let j = 0; j < 10; j++) {
      const tmp = mask ^ (1 << j)
      res += map.get(tmp) || 0
    }

    map.set(mask, (map.get(mask) || 0) + 1)
  }
  return res
}

// another


/**
 * @param {string} word
 * @return {number}
 */
const wonderfulSubstrings = (word) => {
  let res = 0, count = Array(1024).fill(0);
  let cur = 0;
  count[0] = 1;
  for (let i = 0; i < word.length; ++i) {
    const num = word[i].charCodeAt() - 97;
    cur ^= 1 << (num);
    res += count[cur];
    ++count[cur];
    
    for (let j = 0; j < 10; ++j) {
      res += count[cur ^ (1 << j)];
    }
  }
  
  return res;
};

// another

/**
 * @param {string} word
 * @return {number}
 */
const asi = (c) => c.charCodeAt();
const wonderfulSubstrings = (s) => {
    let res = 0;
    let f = Array(2 ** 10).fill(0);
    f[0] = 1; // count array
    let cur = res = 0;
    for (const c of s) {
        cur ^= 1 << asi(c) - 97; // get Hash (the set bit for a character.), update prefix parity
        res += f[cur];
        for (let i = 0; i < 10; i++) { // a ~ j
            res += f[cur ^ 1 << i]; // 1 << i get Hash
        }
        f[cur]++;
    }
    return res;
};
