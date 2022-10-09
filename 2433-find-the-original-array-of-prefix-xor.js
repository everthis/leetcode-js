/**
 * @param {number[]} pref
 * @return {number[]}
 */
const findArray = function(pref) {
  const n = pref.length
  if(n == 0 || n==1) return pref
  const res = [pref[0]]
  let xor = pref[0]
  for(let i = 1; i < n; i++) {
     const v = pref[i]
     // v = xor ^ e
     // v ^ xor = e
     const tmp = v ^ xor
     res.push(tmp)
     xor = xor ^ tmp
  }
  
  return res
};
