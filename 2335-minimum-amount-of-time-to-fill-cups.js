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
