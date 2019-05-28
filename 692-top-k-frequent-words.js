/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
  const hash = {}
  words.forEach(el => {
    if(hash.hasOwnProperty(el)) {
      hash[el]++
    } else {
      hash[el] = 1
    }
  })
  const freqArr = new Array(words.length)
  const keys = Object.keys(hash)
  
  for(let k of keys) {
    let freq = hash[k]
    if(freqArr[freq] == null) {
       freqArr[freq] = []
    }
    freqArr[freq].push(k)
  }
  
  const res = []
  for(let i = freqArr.length; i >= 0 && res.length < k; i--) {
    if(freqArr[i] != null) {
      res.push(...(freqArr[i].sort()))
    }
  }
  
  return res.slice(0, k)
};
