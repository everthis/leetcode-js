/**
 * @param {number[][]} transactions
 * @return {number}
 */
const minimumMoney = function(transactions) {
  let res = 0;
  let v = 0;
  for (const a of transactions) {
    v = Math.max(v, Math.min(a[0], a[1]));
    res += Math.max(a[0] - a[1], 0);
  }
  return res + v;
};
