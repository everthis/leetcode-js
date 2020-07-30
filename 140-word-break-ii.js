/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function(s, wordDict) {
    return backTrack(s, wordDict, {})
};

function backTrack(s, wordDict, mem) {
    if(mem.hasOwnProperty(s)) return mem[s]
    const result = []
    for(let word of wordDict) {
        if(s.startsWith(word)) {
           let next = s.slice(word.length)
           if(next.length === 0) result.push(word)
           else {
               for(let sub of backTrack(next, wordDict, mem)) {
                   result.push(word+ ' '+sub)
               }
           }
        }
    }
    mem[s] = result
    return result
}

// another

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
  const dictSet = new Set(wordDict)
  const memo = {}
  function dfs(start) {
    if (start > s.length - 1) {
      return [[]]
    }
    if (memo[start] !== undefined) {
      return memo[start]
    }
    const out = []
    for (let i = start; i < s.length; i++) {
      const substr = s.substring(start, i + 1)
      if (dictSet.has(substr)) {
        let next = dfs(i + 1)
        for (let n of next) {
          out.push([substr, ...n])
        }
      }
    }
    return (memo[start] = out)
  }
  const res = dfs(0)
  return res.filter((a) => a.join('') === s).map((a) => a.join(' '))
}
