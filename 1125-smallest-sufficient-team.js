/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
const smallestSufficientTeam = function(req_skills, people) {
  const m = req_skills.length
  const n = people.length
  const skill2Bitmap = req_skills
    .map((x, i) => [x, i])
    .reduce((dict, cur) => {
      dict[cur[0]] = 1 << cur[1]
      return dict
    }, {})
  const newPeople = people.map(x => {
    return x.reduce((acc, cur) => {
      const y = skill2Bitmap[cur]
      if (y !== undefined) {
        acc |= y
      }
      return acc
    }, 0)
  })

  const all = (1 << m) - 1
  const dp = {}
  for (let j = 0; j < n; j++) {
    if (newPeople[j] > 0) {
      dp[newPeople[j]] = new Set([j])
    }
  }
  if (dp[all]) {
    return Array.from(dp[all]).sort()
  }

  for (let k = 0; k < n; k++) {
    for (let s in dp) {
      for (let j = 0; j < n; j++) {
        if (newPeople[j] === 0 || dp[s].has(j)) continue
        const newIdx = s | newPeople[j]
        if (dp[newIdx] === undefined) {
          dp[newIdx] = new Set([...dp[s], j])
          if (newIdx === all) {
            return Array.from(dp[all]).sort()
          }
        }
      }
    }
  }
  return []
}
