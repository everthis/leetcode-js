/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
  citations = citations.sort((a, b) => b - a)

  for (let i = 0, len = citations.length; i < len; i++) {
    if (i >= citations[i]) return i
  }

  return citations.length
}

// another


const hIndex = function(citations) {
  const buckets = Array(citations.length + 1).fill(0)
  citations.forEach(citation => {
    buckets[citation >= citations.length ? citations.length : citation]++
  })
  for (let i = citations.length, count = 0; i >= 0; i--) {
    count += buckets[i]
    if (count >= i) return i
  }
  return 0
}
