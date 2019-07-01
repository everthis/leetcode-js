/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */
const findMaximizedCapital = function(k, W, Profits, Capital) {
  let idxArr = Profits.map((_, i) => i).sort((ia, ib) => Profits[ib] - Profits[ia]);
  while (k) {
    let choose = idxArr.findIndex(i => Capital[i] <= W);
    if (choose == -1) return W;
    W += Profits[idxArr[choose]];
    idxArr.splice(choose, 1);
    k--;
  }
  return W;
};
