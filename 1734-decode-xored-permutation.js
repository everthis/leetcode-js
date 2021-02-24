/**
 * @param {number[]} encoded
 * @return {number[]}
 */
const decode = function(encoded) {
  let a = 0
  const n = encoded.length + 1
  for(let i = 0; i <= n; i++) {
    a ^= i
    if(i < n && i % 2 === 1) a ^= encoded[i]
  }
  const res = [a]
  for(let i = 0; i < n - 1; i++) {
    res[i + 1] = res[i] ^ encoded[i]
  }
  
  return res
};
