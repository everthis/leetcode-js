/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) return [];
  const res = [];
  let ans = "";
  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <= 3; c++) {
        for (let d = 1; d <= 3; d++) {
          if (a + b + c + d === s.length) {
            let A = +s.substr(0, a);
            let B = +s.substr(a, b);
            let C = +s.substr(a + b, c);
            let D = +s.substr(a + b + c, d);
            if (A <= 255 && B <= 255 && C <= 255 && D <= 255) {
              if (
                ((ans = A + "." + B + "." + C + "." + D).length === s.length + 3)
              ) {
                res.push(ans);
              }
            }
          }
        }
      }
    }
  }

  return res;
};
