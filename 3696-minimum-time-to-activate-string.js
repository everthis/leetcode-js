/**
 * @param {string} s
 * @param {number[]} order
 * @param {number} k
 * @return {number}
 */
var minTime = function(s, order, k) {
  const len = order.length
  let l = 0, r = len
  const {floor: flr} = Math
  while(l < r) {
    const mid = flr((l + r) / 2)
    if(isOK(mid)) r = mid
    else l = mid + 1
  }

  return l >=  len ? -1 : l

  function isOK(t) {
    const n = s.length

    const isStar = Array(n).fill(false)
    let inValid = 0, segLen = 0

    for(let i = 0; i <= t; i++) isStar[order[i]] = true 

    for(let i = 0; i < n; i++) {
      if(isStar[i]) {
        inValid += segLen * (segLen + 1) / 2
        segLen = 0
      } else {
        segLen++
      }
    }

    if(segLen) inValid += segLen * (segLen + 1) / 2

    const all = n * (n + 1) / 2

    const valid = all - inValid
    return valid >= k
  }
};
