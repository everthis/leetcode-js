/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const arr = [];
  const res = [];
  const hash = {};
  let tmp;
  let idx;
  for (let i = 0; i < s.length; i++) {
    tmp = s.charAt(i);
    if (hash.hasOwnProperty(tmp)) {
      idx = arr.indexOf(tmp);
      if (idx >= 0) {
        arr.splice(idx, 1);
        res.splice(idx, 1);
      }

      hash[tmp] += 1;
    } else {
      arr.push(tmp);
      res.push(i);
      hash[tmp] = 1;
    }
  }
  return res[0] == null ? -1 : res[0];
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    if(s === '') return -1
    const map = new Map()
    for(let i = 0, len = s.length; i < len; i++) {
      if(!map.has(s[i])) map.set(s[i], [i, 0])
      map.get(s[i])[1] += 1
    }
    for(let [key, val] of map) {
      if(val[1] === 1) return val[0]
    }
    return -1
    
};
