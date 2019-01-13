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

// another method

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
  const ans = [];
  const stack = [];
  let ipstr;
  const len = s.length;
  function restoreIp(start) {
    if (stack.length > 4) return;
    if (stack.length === 4 && start > len - 1) {
      ans.push(stack.slice().join("."));
      return;
    }
    for (let i = start; i < start + 3; i++) {
      if (i > len - 1) return;
      ipstr = s.substring(start, i + 1);
      if ((ipstr[0] === "0" && ipstr.length !== 1) || ipstr > 255) return;
      stack.push(ipstr);
      restoreIp(i + 1);
      stack.pop();
    }
  }
  restoreIp(0);
  return ans;
};
