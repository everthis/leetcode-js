/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const sh = strHash(s);
  const th = strHash(t);
  for (let key in sh) {
    if (sh.hasOwnProperty(key) && sh[key] !== th[key]) {
      return false;
    }
  }
  return true;
};

function strHash(str) {
  let res = {};
  for (let i = 0; i < str.length; i++) {
    if (res.hasOwnProperty(str[i])) {
      res[str[i]] += 1;
    } else {
      res[str[i]] = 1;
    }
  }
  return res;
}
