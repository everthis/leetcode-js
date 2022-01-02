/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
const asteroidsDestroyed = function(mass, asteroids) {
  asteroids.sort((a, b) => a - b)
  let res = true
  for(let i = 0, n = asteroids.length; i < n; i++) {
    const cur = asteroids[i]
    if(mass >= cur) {
      mass += cur
    } else {
      res = false
      break
    }
  }
  
  return res
};
