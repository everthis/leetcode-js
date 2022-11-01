/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
const minimumHealth = function(damage, armor) {
  const l = Math.max(...damage) 
  const sum = damage.reduce((ac, e) => ac + e, 0)
  return sum - (armor >= l ? l : armor) + 1
};
