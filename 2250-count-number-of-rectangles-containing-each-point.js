/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
function countRectangles(rect, points) {
  const hash = {}
  for(let [y, x] of rect) {
    if(hash[x] == null) hash[x] = []
    hash[x].push(y)
  }
  const keys = Object.keys(hash).map(e => +e)
  for(const k of keys) {
    hash[k].sort((a, b) => a - b)
  }
  keys.sort((a, b) => a - b)
  const res = []
  const n = keys.length
  // console.log(keys, hash)
  for(const [y, x] of points) {
    let v = 0
    const idx = helper(keys, x)
    for(let i = idx; i < n; i++) {
      const k = keys[i]
      const p = helper(hash[k], y)
      v += p === hash[k].length ? 0 : hash[k].length - p
    }
    res.push(v)
  }

  return res

  function helper(arr, val) {
    let l = 0, r = arr.length
    while(l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if(valid(mid)) r = mid
      else l = mid + 1
    }
    // console.log(arr, val, l)
    return l

    function valid(mid) {
      return arr[mid] >= val
    }
  }
}
