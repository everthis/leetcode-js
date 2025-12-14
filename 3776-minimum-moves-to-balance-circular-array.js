/**
 * @param {number[]} balance
 * @return {number}
 */
var minMoves = function(balance) {
   const n = balance.length
  let negIdx = -1
  let totalSum = 0

  for(let i = 0; i < n; i++) {
    totalSum += balance[i]
    if(balance[i] < 0) negIdx = i
  }

  if(negIdx === -1) return 0
  if(totalSum < 0) return -1

  let need = -balance[negIdx]
  const sources = []

  for(let i = 0; i < n; i++) {
    if(i === negIdx) continue
    let canAdd = balance[i]
    let d = Math.abs(i - negIdx)
    let dist = Math.min(d, n - d)
    sources.push([dist, canAdd])
  }

  sources.sort((a, b) => a[0] - b[0])

  let cost = 0

  for(const [dist, canAdd] of sources) {
    if(need === 0) break
    let take = Math.min(canAdd, need)
    cost += take * dist
    need -= take
  }

  
  return need === 0 ? cost : -1
};
