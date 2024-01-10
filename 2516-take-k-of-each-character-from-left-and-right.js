/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const takeCharacters = function(s, k) {
   const n = s.length
   const cnt = Array(3).fill(0)
   const a = 'a'.charCodeAt(0)
   for(const ch of s) {
     cnt[ch.charCodeAt(0) - a]++
   }
   const target = Array(3).fill(0)
   for(let i = 0; i < 3; i++) {
     target[i] = cnt[i] - k
   }
   for(let e of target) {
     if(e < 0) return -1
   }
   const arr = Array(3).fill(0)
   let res = 0
   let i = 0
   for(let j = 0; j < n; j++) {
     const idx = s[j].charCodeAt(0) - a
     arr[idx]++
     while(!valid()) {
       const ii = s[i].charCodeAt(0) - a
       arr[ii]--
       i++
     }
     res = Math.max(res, j - i + 1)
   }

   return n - res

   function valid() {
     return arr.every((e, i) => e <= target[i])
   }
};

// another

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const takeCharacters = function(s, k) {
  const cnt = {a: 0, b: 0, c: 0}
  const n = s.length
  for(const ch of s) {
    cnt[ch]++
  }
  if(cnt.a < k || cnt.b < k || cnt.c < k) return -1
  const limits = { a: cnt.a - k, b: cnt.b - k, c: cnt.c - k }
  let l = 0, r = 0, res = 0
  const hash = {a: 0, b: 0, c: 0}
  for(; r < n; r++) {
    const cur = s[r]
    hash[cur]++
    while(hash[cur] > limits[cur]) {
      hash[s[l]]--
      l++
    }
    
    res = Math.max(res, r - l + 1)
  }
  
  return n - res
};
