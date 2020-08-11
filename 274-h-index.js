/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
  const n = citations.length
  const arr = Array(n + 1).fill(0)
  for(let e of citations) {
    if(e >= n) arr[n]++
    else arr[e]++
  }
  for(let i = n, sum = 0; i >= 0; i--) {
    sum += arr[i]
    if(sum >= i) return i
  }
  return 0
};

// another

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
