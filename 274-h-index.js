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
