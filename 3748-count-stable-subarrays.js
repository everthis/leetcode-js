/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var countStableSubarrays = function(nums, queries) {
  let n = nums.length
  const {floor: flr} = Math
  let res = []
  let segments = [], start = 0

  for(let i = 0; i < n; i++) {
    if(nums[i] < nums[i - 1]) {
      segments.push([start, i - 1])
      start = i
    }
  }
  segments.push([start, n - 1])

  let pc = []

  let total = 0
  for(const [s, e] of segments) {
    let length = e - s + 1
    let count = length * (length + 1) / 2
    total += count
    pc.push(total)
  }

  for(const [l, r] of queries) {
    let li = bisect(segments, l) - 1
    let ri = bisect(segments, r) - 1
    if(li < 0) li = 0
    if(ri < 0) ri = 0
    if(li === ri) {
      let [ss, se] = segments[li]
      let length = r - l + 1
      let count = length * (length + 1) / 2
      res.push(count)
    } else {
      let [ss, se] = segments[li]
      let ll = se - l + 1
      let lc = ll * (ll + 1) / 2

      let [ssr, ser] = segments[ri]
      let rl = r - ssr + 1
      let rc = rl * (rl + 1) / 2

      let mid_count = 0
      if(ri - li > 1) {
        mid_count = pc[ri - 1] - pc[li]
      }
      res.push(lc + mid_count + rc)
    }

  }
  
  return res

  function bisect(segments, x) {
    let low = 0, high = segments.length
    while(low < high) {
      let mid = flr((low + high) / 2)
      if(segments[mid][0] <= x) low = mid + 1
      else high = mid
    }

    return low
  }
};
