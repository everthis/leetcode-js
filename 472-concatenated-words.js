/**
 * @param {string[]} words
 * @return {string[]}
 */

const findAllConcatenatedWordsInADict = function (words) {
  const pre = new Set()
  words.sort((a, b) => a.length - b.length)
  const res = []
  for(let i = 0; i < words.length; i++) {
    if(valid(words[i], pre)) {
      res.push(words[i])
    }
    pre.add(words[i])
  }

  return res

  function valid(str, set) {
    if(set.size === 0) return false
    const dp = Array(str.length + 1).fill(false)
    dp[0] = true
    for(let i = 1; i <= str.length; i++) {
      for(let j = 0; j < i; j++) {
        if(!dp[j]) continue
        if(set.has(str.slice(j, i))) {
          dp[i] = true
          break
        }
      }
    }
    
    return dp[str.length]
  }
}




// another

/**
 * @param {string[]} words
 * @return {string[]}
 */

const findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words)
  const res = []
  const map = new Map()
  for (let w of words) {
    if (w.length < 2) continue
    if (dfs(w, set, map, 0)) res.push(w)
  }
  return res

  function dfs(word, set, map, pos) {
    if (pos > 0 && map.get(word)) return map.get(word)
    if (pos > 0 && set.has(word)) {
      map.set(word, true)
      return map.get(word)
    }
    for (let i = 1; i < word.length; i++) {
      const left = word.slice(0, i)
      const right = word.slice(i)
      if (set.has(right) && dfs(left, set, map, pos + 1)) {
        map.set(word, true)
        return map.get(word)
      }
    }

    map.set(word, false)
    return false
  }
}

// another

/**
 * @param {string[]} words
 * @return {string[]}
 */

const findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words)
  const res = []
  const map = new Map()

  for(let word of words) {
    if(dfs(word, 0)) res.push(word)
  }
  return res
  function dfs(word, idx) {
    if(map.has(word)) return map.get(word)
    if(idx > 0 && set.has(word)) return true
    let tmp = false
    for(let i = 1; i < word.length; i++) {
      const prefix = word.slice(0, i), suffix = word.slice(i)
      if(set.has(prefix) && set.has(suffix)) {
        tmp = true
        break
      }
      if(set.has(prefix) && dfs(suffix, idx + 1)) {
        tmp = true
        break
      }
    }
    
    map.set(word, tmp)
    return tmp
  }
}


// another

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
