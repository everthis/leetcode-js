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
