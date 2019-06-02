/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
  let res = "";

  if (str1[0] !== str2[0]) return res;
  if (str1[str1.length - 1] !== str2[str2.length - 1]) return res;
  let s = str1[0];
  let e = str1[str1.length - 1];

  let loopStr = str1.length > str2.length ? str2 : str1;
  for (let i = 1, len = loopStr.length; i < len; i++) {
    if (loopStr[i] !== e) continue;
    let tmp = loopStr.slice(0, i + 1);
    let ok1 = false;
    let ok2 = false;
    let t1 = "";
    let t2 = "";
    while (t1.length < str1.length) {
      t1 += tmp;
      if (t1 === str1) {
        ok1 = true;
        break;
      }
    }
    while (t2.length < str2.length) {
      t2 += tmp;
      if (t2 === str2) {
        ok2 = true;
        break;
      }
    }

    if (ok1 && ok2 && tmp.length > res.length) res = tmp;
  }

  return res;
};
