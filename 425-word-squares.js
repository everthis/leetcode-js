/**
 * @param {string[]} words
 * @return {string[][]}
 */
const wordSquares = function(words) {
  const length = words[0].length
  const createPrefixMap = function(words) {
    const result = new Map()
    for (let word of words) {
      for (let i = 0; i < word.length - 1; ++i) {
        const prefix = word.slice(0, i + 1)
        const array = result.get(prefix)
        if (array) {
          array.push(word)
        } else {
          result.set(prefix, [word])
        }
      }
    }
    return result
  }
  const backtracking = function(step, result, martix, wordsList) {
    if (step === length) {
      result.push([...martix])
      return
    }
    for (let word of wordsList) {
      martix.push(word)
      let prefix = ''
      for (let i = 0; i < step + 1; ++i) {
        prefix += martix[i][step + 1]
      }
      let newLists = dictMap.get(prefix)
      newLists = newLists ? newLists : []
      backtracking(step + 1, result, martix, newLists)
      martix.pop()
    }
  }
  const result = []
  const dictMap = createPrefixMap(words)
  backtracking(0, result, [], words)
  return result
}

// another

/**
 * @param {string[]} words
 * @return {string[][]}
 */
const wordSquares = function(words) {
  let result = []
  let trie = new Trie()
  for (let word of words) {
    trie.add(word)
  }
  
  findWordSquare(result, [], trie)
  return result
};

function findWordSquare (result, temp, trie) {
  if (temp.length > 0 && temp.length === temp[0].length) {
    result.push(temp)
    return
  }
  
  let prefix = ''
  let j = temp.length
  for (let i = 0; i < temp.length; i++) {
    prefix += temp[i][j]
  }
  
  let startWith = trie.startWith(prefix)
  for (let word of startWith) {
    findWordSquare(result, temp.concat([word]), trie)
  }
}

function Trie () {
  this.isWord = false
  this.children = new Map()
}

Trie.prototype.add = function (word) {
  let cur = this
  for (let i = 0; i < word.length; i++) {
    if (!cur.children.has(word[i])) {
      cur.children.set(word[i], new Trie())
    }
    cur = cur.children.get(word[i])
  }
  cur.isWord = true
}

Trie.prototype.startWith = function (prefix) {
  let cur = this
  for (let i = 0; i < prefix.length; i++) {
    if (cur.children.has(prefix[i])) {
      cur = cur.children.get(prefix[i])
    } else {
      return []
    }
  }
  
  let res = []
  const findWords = function (res, cur, str) {
    if (!cur.isWord) {
      for (let [key, val] of cur.children) {
        findWords(res, val, str + key)
      }
    } else {
      res.push(str)
    }
  }
  
  findWords(res, cur, prefix)
  return res
}
