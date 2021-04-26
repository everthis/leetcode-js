/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function(s, wordDict) {
  const set = new Set(wordDict)
  const map = new Map()
  return helper(s, 0, set, map)
};

function helper(str, idx, set, map) {
  if(idx === str.length) return []
  if(map.has(idx)) return map.get(idx)
  const res = []
  for(let i = idx; i < str.length; i++) {
    const tmp = str.slice(idx, i + 1)
    if(set.has(tmp)) {
      const arr = helper(str, i + 1, set, map)
      if(i === str.length - 1) res.push(tmp)
      for(let item of arr) {
        res.push(`${tmp} ${item}`)
      }
    }
  }
  map.set(idx, res)
  return res
}
// another


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

// another

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

const wordBreak = (s, wordDict) => {
  const set = new Set(wordDict)
  return helper(s, 0, set)
}

function helper(s, idx, dict) {
  if(idx === s.length) return []
  const res = []
  for(let i = idx; i < s.length; i++) {
    const tmp = s.slice(idx, i + 1)
    if(dict.has(tmp)) {
      const arr = helper(s, i + 1, dict)
      if(i + 1 >= s.length) {
        res.push(tmp)
      } else if(arr.length) {
        for(let e of arr) {
          res.push(tmp + ' ' + e)
        }
      }
    }
  }
  return res
}
