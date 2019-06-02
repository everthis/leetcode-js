/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const addNegabinary = function(arr1, arr2) {
  let ret = [];
  arr1.reverse();
  arr2.reverse();
  let n = arr1.length,
    m = arr2.length,
    g = 0;
  for (let i = 0; i < Math.max(n, m); i++) {
    let s = g;
    if (i < n) s += arr1[i];
    if (i < m) s += arr2[i];
    g = (s / -2) >> 0;
    if (s + g * 2 < 0) g++;
    ret.push(s + g * 2);
  }
  while (g) {
    let s = g;
    g = (s / -2) >> 0;
    if (s + g * 2 < 0) g++;
    ret.push(s + g * 2);
  }
  while (ret.length > 1 && ret[ret.length - 1] == 0) ret.pop();
  ret.reverse();
  return ret;
};
