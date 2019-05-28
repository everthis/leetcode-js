/**
 * @param {string} s
 * @return {number}
 */
const strongPasswordChecker = function(s) {
  let n = s.length,
    toAdd = Math.max(0, 6 - n),
    toDel = Math.max(n - 20, 0),
    repeat = Array.from({ length: 3 }, _ => []),
    lower = 1,
    upper = 1,
    digit = 1,
    add = 0,
    del = 0,
    rep = 0,
    k = 0;

  for (let i = 0; i <= n; i++) {
    if (s[i] != s[k]) {
      let len = i - k;
      if (len >= 3) repeat[len % 3].push(len);
      k = i;
    }
    if (i == n) break;
    if (/\d/.test(s[i])) digit = 0;
    if (/[a-z]/.test(s[i])) lower = 0;
    if (/[A-Z]/.test(s[i])) upper = 0;
  }

  repeat.map((arr, mod) => {
    for (let len of arr) {
      if (toAdd - add > 0) {
        len -= 2;
        add++;
      }

      if (toDel - del > 0) {
        del += mod + 1;
        len -= mod + 1;
      }
      rep += (len / 3) | 0;
    }
  });
  toDel - del > 0
    ? (rep = Math.max(0, rep - Math.floor((toDel - del) / 3)))
    : (rep += del - toDel);
  return toDel + Math.max(digit + lower + upper, rep + toAdd);
};

