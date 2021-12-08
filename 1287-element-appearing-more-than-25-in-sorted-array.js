/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function (arr) {
  const n = arr.length,
    { floor } = Math,
    { getWordIndexRange } = Search()
  const ticks = [n / 4, n / 2, (n * 3) / 4].map((e) => floor(e))
  for (const i of ticks) {
    const [s, e] = getWordIndexRange(arr, arr[i])
    if (e - s > n / 4) return arr[i]
  }
  return 0
}

function Search() {
  return { getWordIndexRange }

  /**
   * Searches for the first true value in the predicate.
   * Returns hi if not found.
   * [lo, hi)
   */
  function binarySearch(lo, hi, predicate) {
    while (lo != hi) {
      let mid = ((lo + hi) / 2) | 0
      if (predicate(mid)) {
        hi = mid
      } else {
        lo = mid + 1
      }
    }
    return lo
  }

  function getWordIndexRange(keys, word) {
    let lo = 0,
      hi = keys.length
    function greaterOrEqual(index) {
      return keys[index] >= word
    }
    function less(index) {
      return keys[index] > word
    }
    let lower_bound = binarySearch(0, keys.length, greaterOrEqual)
    let upper_bound = binarySearch(lower_bound, keys.length, less)
    return [lower_bound, upper_bound]
  }
}
