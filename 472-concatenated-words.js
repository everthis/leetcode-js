/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function(words) {
  let res = []
  if (words === null || words.length == 0) return res
  let set = new Set(words)
  for (let word of words) {
    set.delete(word)
    if (dfs(word, set, '')) res.push(word)
    set.add(word)
  }
  return res
}

function dfs(word, set, prev) {
  if (prev != '') set.add(prev)
  if (set.has(word)) return true
  for (let i = 1; i <= word.length; i++) {
    const prefix = word.substring(0, i)
    if (set.has(prefix) && dfs(word.substring(i), set, prev + prefix)) {
      return true
    }
  }
  return false
}
