/**
 * @param {number[]} skill
 * @return {number}
 */
const dividePlayers = function(skill) {
  skill.sort((a, b) => a - b)
  const n = skill.length
  const sum = skill[0] + skill[skill.length - 1]
  for(let i = 1; i < n / 2; i++) {
    const j = n - 1 - i
    if(skill[i] + skill[j] !== sum) return -1
  }
  let res = skill[0] * skill[skill.length - 1]
  for(let i = 1; i < n / 2; i++) {
    const j = n - 1 - i
    res += skill[i] * skill[j]
  }
  
  return res
};
