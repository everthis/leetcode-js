/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const countOfSubstrings = function(word, k) {
  const vs = new Set(['a', 'e', 'i', 'o', 'u'])
  const n = word.length
  const h = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }
  const nxtConsonant = Array(n).fill(n)
  let conIdx = n
  for(let i = n - 1; i >= 0; i--) {
    nxtConsonant[i] = conIdx
    if(!vs.has(word[i])) conIdx = i
  }
  
  let res = 0, cnt = 0, i = 0

  for(let j = 0, n = word.length; j < n; j++) {
    const ch = word[j]
    if(vs.has(ch)) h[ch]++
    else cnt++

    //
    while(cnt > k) {
        const el = word[i]
        if(vs.has(el)) h[el]--
        else cnt--
        i++
    }

    //
    while(i < j && valid()) {
        res += nxtConsonant[j] - j
        const el = word[i]
        if(vs.has(el)) h[el]--
        else cnt--
        i++
    }

  }
  
  return res

  function valid() {
    if(cnt !== k) return false
    for(const e of vs) {
        if(h[e] < 1) return false
    }

    return true
  }
};
