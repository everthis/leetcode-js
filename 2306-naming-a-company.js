/**
 * @param {string[]} ideas
 * @return {number}
 */
const distinctNames = function (ideas) {
  let smap = Array.from({ length: 26 }, (_) => new Set()),
    ans = 0
  for (let i = 0; i < ideas.length; i++) {
    let word = ideas[i]
    smap[word.charCodeAt(0) - 97].add(word.slice(1))
  }
  for (let i = 0; i < 25; i++) {
    let a = smap[i]
    for (let j = i + 1; j < 26; j++) {
      let b = smap[j],
        count = 0
      for (let w of a) if (b.has(w)) count++
      ans += (a.size - count) * (b.size - count) * 2
    }
  }
  return ans
}
