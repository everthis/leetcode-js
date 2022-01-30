/**
 * @param {string} s
 * @param {number} power
 * @param {number} modulo
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */
var subStrHash = function (s, power, modulo, k, hashValue) {
  let n = s.length;
  const p_pow = Array(n + 1);
  p_pow[0] = 1n;
  power = BigInt(power);
  let m = BigInt(modulo);
  for (let i = 1; i < p_pow.length; i++) p_pow[i] = (p_pow[i - 1] * power) % m;

  const val = (ch) => BigInt(ch.charCodeAt(0) - "a".charCodeAt(0));
  const h = Array(n + 1).fill(0n);
  for (let i = n - 1; i >= 0; i--)
    h[i] = (h[i + 1] * power + val(s[i]) + 1n) % m;

  for (let i = 0; i + k - 1 < n; i++) {
    let cur_h = (h[i] - h[i + k] * p_pow[k]) % m;
    let temp = (cur_h + m) % m;
    if (temp == hashValue) {
      return s.substr(i, k);
    }
  }
  return "";
};
