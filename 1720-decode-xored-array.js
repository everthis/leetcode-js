/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
  const res = [first]
  
  for(let i = 0, len = encoded.length; i < len; i++) {
    res[i + 1] = res[i] ^ encoded[i]
  }
  
  return res
};
