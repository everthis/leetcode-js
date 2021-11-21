/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function(colors) {
  const n = colors.length
  let res = 0
  for(let i = 1; i < n; i++) {
    const cur = colors[i]
    for(let j = 0; j < i; j++) {
      if(colors[i] !== colors[j]) {
        res = Math.max(res, i - j)
        break
      }
    }
  }
  
  return res
};
