/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = function(aliceSizes, bobSizes) {
  let sum = 0
  for(let e of aliceSizes) sum += e
  for(let e of bobSizes) sum -= e
  // sum > 0, alice > bob
  // sum < 0, alice < bob
  sum /= 2
  const set = new Set()
  for(let e of aliceSizes) set.add(e)
  for(let e of bobSizes) {
    if(set.has(e + sum)) return [e + sum, e]
  }
  return [0]
};
