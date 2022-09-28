/**
 * @param {number[]} arr
 * @return {number[]}
 */
 const pancakeSort = function (arr) {
  const res = []
  let n = arr.length
  while(n) {
    const idx = indexOf(0, n - 1, n)
    if(idx === n - 1) {
      n--
    } else {
      flip(0, idx)
      flip(0, n - 1)
      res.push(idx + 1, n)
      n--
    }
  }
  return res

  function flip(l, r) {
    while(l < r) {
      const tmp = arr[l]
      arr[l] = arr[r]
      arr[r] = tmp
      l++
      r--
    }
  }

  function indexOf(start, end, target) {
    let res = -1
    for(let i = start; i <= end; i++) {
      if(arr[i]===target) {
        res = i
        break
      }
    }
    return res
  }
}
