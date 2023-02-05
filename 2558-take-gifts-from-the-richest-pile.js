/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
const pickGifts = function(gifts, k) {
  
  const n = gifts.length
  while(k > 0) {
    
    const max = Math.max(...gifts)
    const idx = gifts.indexOf(max)
    gifts[idx] = ~~(Math.sqrt(max))
    
    k--
  }
  
  return gifts.reduce((ac, e) => ac + e, 0)
};
