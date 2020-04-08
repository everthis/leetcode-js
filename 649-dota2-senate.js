/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function (senate) {
  const m = senate.length,
    radiant = [],
    dire = []
  for (let i = 0; i < m; i++) {
    if (senate[i] === 'R') {
      radiant.push(i)
    } else {
      dire.push(i)
    }
  }

  while (radiant.length && dire.length) {
    let r = radiant.shift(),
      d = dire.shift()
    if (r < d) {
      radiant.push(r + m)
    } else {
      dire.push(d + m)
    }
  }
  return radiant.length > dire.length ? 'Radiant' : 'Dire'
}
