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

// another

/**
 * @param {number[]} encoded
 * @return {number[]}
 */
const decode = function(A) {
  let xor = 0
  const len = A.length
  const permLen = len + 1
  for(let i = 1; i <= permLen; i++) {
    xor ^= i
  }
  // except first
  for(let i = 1; i < len; i += 2) xor ^= A[i]
  const first = xor
  const res = [xor]
  let pre = xor
  for(let i = 1; i < permLen; i++) {
    res[i] = A[i - 1] ^ pre
    pre = res[i]
  }
  return res;    
};
