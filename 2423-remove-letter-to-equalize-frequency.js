/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function (word) {
  const cnt = {}
  for(const ch of word) {
    if(cnt[ch] == null) cnt[ch] = 0
    cnt[ch]++
  }

  for(const ch of word) {
    cnt[ch]--
    if(cnt[ch] === 0) delete cnt[ch]
    const s = new Set([...Object.values(cnt)])
    if(s.size === 1) return true

    if(cnt[ch] == null) cnt[ch] = 0
    cnt[ch]++ 
  }

  return false
}
