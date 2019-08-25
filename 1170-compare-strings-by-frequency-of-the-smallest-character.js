/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = function(queries, words) {
  const qArr = []
  for(let i = 0, len = queries.length; i < len; i++) {
    let sm = 'z'
    let hash = {}
    let cur = queries[i]
    for(let char of cur) {
      if(hash[char] == null) hash[char] = 0
      hash[char]++
      if(char < sm) sm = char
    }
    qArr.push(hash[sm])
  }
  const wArr = []
  for(let i = 0, len = words.length; i < len; i++) {
    let sm = 'z'
    let hash = {}
    let cur = words[i]
    for(let char of cur) {
      if(hash[char] == null) hash[char] = 0
      hash[char]++
      if(char < sm) sm = char
    }
    wArr.push(hash[sm])
  }
  const res = []
  for(let i = 0, len = queries.length; i < len; i++) {
    let cur = 0
    for(let j = 0, wlen = words.length; j < wlen; j++) {
      if(qArr[i] < wArr[j]) cur++
    }
    res.push(cur)
  }
  return res
};
