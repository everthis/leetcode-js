/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
  const { floor: flr, ceil, max} = Math
  const ma = max(...amount)
  const sum = amount.reduce((ac, e) => ac + e, 0)
  const rest = sum - ma
  if(ma > rest) return ma
  return ceil(sum / 2)
};


// another

/**
 * @param {number[]} amount
 * @return {number}
 */
const fillCups = function(amount) {
  amount.sort((a, b) => a- b)
  let res = 0;
  while (amount[2] !== 0) {
    res++;
    amount[2]--;
    if (amount[1] > 0) {
        amount[1]--;
    }
    amount.sort((a, b) => a- b)
  }
  return res;  
};
