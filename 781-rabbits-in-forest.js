/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = function(answers) {
  const h = {}
  for(const e of answers) {
    if(h[e] == null) h[e] = 0
    h[e]++
  }
  let res = 0
  for(let [k,v] of Object.entries(h)) {
    k = +k
    if(k >= v ) res += k + 1
    else {
      res += Math.ceil(v / (k + 1) ) * (k + 1)
    }
  }
  
  return res
};
