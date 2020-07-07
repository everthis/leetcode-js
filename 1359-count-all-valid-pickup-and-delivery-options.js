/**
 * @param {number} n
 * @return {number}
 */
const countOrders = function(n) {
  let res = 1
  const MOD = 10 ** 9 + 7
  for(let i = 1; i <= n; i++) {
    res = res * (i * 2 - 1) * i % MOD;
  }
  return res
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const countOrders = function(n) {
  let res = 1
  const MOD = 10 ** 9 + 7
  for(let i = 1; i <= n; i++) res = res * i % MOD
  for(let i = 1; i < 2 * n; i += 2) res = res * i % MOD
  return res
};
