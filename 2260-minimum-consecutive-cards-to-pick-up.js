/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  const hash = {}, n = cards.length
  for(let i = 0; i < n; i++) {
    const cur = cards[i]
    if(hash[cur] == null) hash[cur] = []
    hash[cur].push(i)
  }
  let res = Infinity
  
  Object.keys(hash).forEach(k => {
    const arr = hash[k]
    const len = arr.length
    for(let i = 1; i < len; i++) {
      res = Math.min(res, arr[i] - arr[i - 1] + 1)
    }
    
  })
  
  
  return res === Infinity ? -1 :  res
};
