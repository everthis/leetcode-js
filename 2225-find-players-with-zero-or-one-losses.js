/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const win = {}, lose = {}, total = new Set(), ls = new Set()
    for(const [w, l] of matches) {
      if(win[w] == null) win[w] = 0
      win[w]++
      if(lose[l] == null) lose[l] = 0
      lose[l]++
      total.add(l)
      total.add(w)
      ls.add(l)
    }
  
    const loseKeys = Object.keys(lose)
    const a0 = []
    for(const e of total) {
      if(!ls.has(e)) a0.push(e)
    }
    const a1 = []
    for(const e of loseKeys) {
      if(lose[e] === 1) a1.push(e)
    }
    a0.sort((a, b) => a - b)
    a1.sort((a, b) => a - b)
    return [a0, a1]
};
