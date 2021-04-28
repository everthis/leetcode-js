/**
 * @param {string[]} votes
 * @return {string}
 */
const rankTeams = function(votes) {
  const hash = {}
  const l = votes[0].length
  for(let vote of votes) {
    for(let i = 0; i < l; i++) {
      const ch = vote[i]
      if(hash[ch] == null) hash[ch] = Array(l).fill(0)
      hash[ch][i]++
    }
  }
  const keys = Object.keys(hash)
  keys.sort((a, b) => {
    for(let i = 0; i < l; i++) {
      if(hash[a][i] !== hash[b][i]) {
        return hash[b][i] - hash[a][i]
      }
    }
    return a === b ? 0 : (a < b ? -1 : 1)
  })

  return keys.join('')
};

// another

/**
 * @param {string[]} votes
 * @return {string}
 */
const rankTeams = function(votes) {
   if (votes.length === 1) return votes[0];
    const score = new Map(votes[0].split('').map(c => [c, new Array(votes[0].length).fill(0)]));
    for (s of votes) {
        for (let i = 0; i < s.length; i++) {
            score.get(s[i])[i]++;
        }
    }
    return votes[0].split('').sort((a,b) => {
        for (let i = 0; i < votes[0].length; i++) {
            if (score.get(a)[i] > score.get(b)[i]) return -1;
            if (score.get(a)[i] < score.get(b)[i]) return 1;
        }
        return a < b ? -1 : 1;
    }).join('');
};
