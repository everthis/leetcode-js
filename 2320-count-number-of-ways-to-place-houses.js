/**
 * @param {number} n
 * @return {number}
 */
const countHousePlacements = function(n) {
  const mod = BigInt(1e9 + 7)
  let house = 1n, space = 1n, total = 2n
  for(let i = 2; i <= n; i++) {
    house = space
    space = total
    total = (house + space) % mod
  }
  
  return total * total % mod
};

// another

/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
  const mod = 1e9 + 7
  let f0 = 1;
  let f1 = 1;
  for (let i = 1; i < n; i++) {
      let nf0 = (f0 + f1) % mod;
      let nf1 = f0;
      f0 = nf0;
      f1 = nf1;
  }
  let m = (f0 + f1) % mod;
  return BigInt(m) * BigInt(m) % BigInt(mod)
};
