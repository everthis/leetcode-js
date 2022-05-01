/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
  const cnt = Array(26).fill(-1);
  let ans = 0;
  let n = s.length;
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < n; i++) {
      let tmp = n - i;
      if (cnt[s[i].charCodeAt(0) - a] !== -1) tmp += (i - cnt[s[i].charCodeAt(0) - a] - 1) * (n - i);
      else tmp += i * (n - i);
      ans += tmp;
      cnt[s[i].charCodeAt(0) - a] = i;
  }
  return ans;
};
