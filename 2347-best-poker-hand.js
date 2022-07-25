/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
const bestHand = function(ranks, suits) {
  let isFlush = false
  const freq = {}
  for(const e of suits) {
      if(freq[e] == null) freq[e] = 0
      freq[e]++
      if(freq[e] >= 5) return 'Flush'
  }
  const rankHash = {}
  for(const e of ranks) {
      if(rankHash[e] == null) rankHash[e] = 0
      rankHash[e]++
      if(rankHash[e] >= 3) return 'Three of a Kind'
  }
  const rankKeys = Object.keys(rankHash)
  for(const k of rankKeys) {
      if(rankHash[k] >= 2) return 'Pair'
  }
  return 'High Card'
};
