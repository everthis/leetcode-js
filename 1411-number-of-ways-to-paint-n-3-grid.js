/**
 * @param {number} n
 * @return {number}
 */
const numOfWays = function(n) {
  const mod = 1e9 + 7
  let colors3 = 6, colors2 = 6
  
  for(let i = 1; i < n; i++) {
    const colors3Tmp = colors3
    colors3 = (2 * colors3 + 2 * colors2) % mod
    colors2 = (2 * colors3Tmp + 3 * colors2) % mod
  }
  
  
  return (colors2 + colors3) % mod
};

// another


/**
 * @param {number} n
 * @return {number}
 */
const numOfWays = function (n) {
  let a121 = 6,
    a123 = 6,
    b121,
    b123,
    mod = 1e9 + 7
  for (let i = 1; i < n; ++i) {
    b121 = a121 * 3 + a123 * 2
    b123 = a121 * 2 + a123 * 2
    a121 = b121 % mod
    a123 = b123 % mod
  }
  return (a121 + a123) % mod
}
