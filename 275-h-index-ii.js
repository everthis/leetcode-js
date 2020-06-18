/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
  let left = 0,
    len = citations.length,
    right = len - 1,
    mid
  while (left <= right) {
    mid = left + ((right - left) >> 1)
    if (citations[mid] >= len - mid) right = mid - 1
    else left = mid + 1
  }
  return len - left
}

// another

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
  const len = citations.length
  let lo = 0,
    hi = len - 1
  while (lo <= hi) {
    let med = lo + ((hi - lo) >> 1)
    if (citations[med] === len - med) {
      return len - med
    } else if (citations[med] < len - med) {
      lo = med + 1
    } else {
      hi = med - 1
    }
  }
  return len - lo
}
