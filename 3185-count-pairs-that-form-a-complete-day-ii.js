/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
  const map = new Map()
  const n = hours.length
  let res = 0
  for(let i = 0;  i < n; i++) {
    const e = hours[i]
    const remain = e % 24
    if(remain === 0 || remain === 24) res += (map.get(24) || 0) + (map.get(0) || 0)
    else res += (map.get(24 - remain) || 0)
    // console.log('res', res)
    map.set(remain, (map.get(remain) || 0) + 1)
  }
  // console.log(map)
  
  return res
};
