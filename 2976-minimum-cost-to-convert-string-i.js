/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
   const mat = Array.from({ length: 26 }, () => Array(26).fill(Number.MAX_SAFE_INTEGER))
   const a = 'a'.charCodeAt(0)
   const len = cost.length
   for(let i = 0; i < len; i++) {
     const u = original[i].charCodeAt(0) - a
     const v = changed[i].charCodeAt(0) - a
     const w = cost[i]
     mat[u][v] = Math.min(w, mat[u][v])
   }
   for(let i = 0; i < 26; i++) mat[i][i] = 0
   
   for(let k = 0; k < 26; k++) {
     for(let i = 0; i < 26; i++) {
       for(let j = 0; j < 26; j++) {
         mat[i][j] = Math.min(mat[i][j], mat[i][k] + mat[k][j])
       }
     }
   }
  
   let res = 0
   const n = source.length
   for(let i = 0; i < n; i++) {
     const u = source[i].charCodeAt(0) - a
     const v = target[i].charCodeAt(0) - a
     if(mat[u][v] === Number.MAX_SAFE_INTEGER) return -1
     res += mat[u][v]
   }
   
   return res
};
