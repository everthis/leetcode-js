/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
const earliestFullBloom = function(plantTime, growTime) {
  const n = plantTime.length, arr = Array(n)
  for(let i = 0; i < n; i++) {
    arr.push([growTime[i], plantTime[i]])
  }
  arr.sort((a, b) => b[0] - a[0])
  
  let res = 0, cur = 0
  for(let i = 0; i < n; i++) {
    const e = arr[i]
    res = Math.max(res, cur + e[0] + e[1])
    cur += e[1]
  }
  
  return res
};

// another


/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
const earliestFullBloom = function(plantTime, growTime) {
  const sum = arr => arr.reduce((ac, e) => ac +e, 0)
  let l = 0, r = sum(plantTime) + sum(growTime)
  const n = plantTime.length

  const a = []
  for(let i = 0; i < n; i++) {
    a.push([growTime[i], plantTime[i] ])
  }

  a.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  a.reverse()
  function chk(d) {
    let total = -1
    let max_num = 0
    for(let i = 0; i < n; i++) {
      total += a[i][1]
      max_num = Math.max(max_num, total + a[i][0] + 1)
    }
    return max_num <= d
  }

  while (l < r) {
    let m = ~~((l + r) / 2)
    if (chk(m)) r = m
    else l = m + 1          
  }

  return l
};

