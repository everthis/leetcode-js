/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = function(dist, hour) {
  const sum = dist.reduce((ac, e) => ac + e, 0)
  let l = 1, r = 10 ** 7
  while(l < r) {
    let mid = l + ((r - l) >> 1)
    if(chk(mid)) r = mid
    else l = mid + 1
  }

  return chk(l) ? l : -1
  
  function chk(speed) {
    let res = 0
    for(let i = 0, len = dist.length; i < len - 1; i++) {
      res += Math.ceil(dist[i] / speed)
    }
    if (dist.length) res += dist[dist.length - 1] / speed 
    return res <= hour
  }
  
};

