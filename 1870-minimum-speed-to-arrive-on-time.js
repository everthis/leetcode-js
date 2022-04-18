/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = function(dist, hour) {
  let n = dist.length, l = 1, r = 1e7 + 1
  while(l < r) {
    const mid = l + ((r - l) >> 1)
    let time = 0
    for(let i = 0; i < n - 1; i++) time += Math.ceil(dist[i] / mid)
    time += dist[dist.length - 1] / mid
    if(time > hour) l = mid + 1
    else r = mid
  }
  return l > 1e7 ? -1 : l
};

// another

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = function(dist, hour) {
  let l = 1, r = 1e7
  while(l <= r) {
    let mid = (l + r) >> 1
    if(valid(mid)) r = mid -1
    else l = mid + 1
  }
  return l > 1e7 ? -1 : l
  
  function valid(speed) {
    let sum = 0
    for(let e of dist) {
      sum = Math.ceil(sum)
      sum += e / speed
      if(sum > hour) return 
    }
    
    return true
  }
};

// another

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

// another

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = function(dist, hour) {
   let l = 1, r = 1e7
   while(l < r) {
     const mid = l + Math.floor((r - l) / 2)
     if(!valid(mid)) l = mid + 1
     else r = mid
   }
   // console.log(l)
  return valid(l) ? l : -1
  
  function valid(mid) {
    let res = 0
    for(let i = 0, n = dist.length; i < n; i++) {
      const d = dist[i] 
      res += (i === n - 1 ? d / mid : Math.ceil(d / mid))
    }
    return res <= hour
  }
};

