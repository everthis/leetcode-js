/**
 * @param {number[]} count
 * @return {number[]}
 */
const sampleStats = function(count) {
  const n = count.length
  let numElems = 0
  let sum = 0
  let min = n - 1
  let max = 0
  let modVal = 0
  let modIdx = 0
  for (let i = 0; i < n; i++) {
    if (count[i]) {
      min = Math.min(i, min)
      max = Math.max(i, max)
      if (count[i] > modVal) {
        modVal = count[i]
        modIdx = i
      }
      sum += i * count[i]
      numElems += count[i]
    }
  }
  const half = Math.floor(numElems / 2)
  let median
  for (let i = 0, c = 0, last = 0; i < n; i++) {
    if (count[i]) {
      c += count[i]
      if (c > half) {
        if (numElems % 2 === 0 && c - count[i] === half) {
          median = (i + last) / 2
        } else {
          median = i
        }
        break
      }
      last = i
    }
  }
  return [min, max, sum / numElems, median, modIdx]
}
