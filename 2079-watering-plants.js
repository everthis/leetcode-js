/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
const wateringPlants = function(plants, capacity) {
  let res = 0, cap = capacity, full = capacity
  for(let i = 0, n = plants.length; i < n; i++) {
    const cur = plants[i]
    cap -= cur
    if(cap >= 0) res++
    else {
      res = res + (i + i + 1)
      cap = full - cur
    }
  }
  
  return res
};
