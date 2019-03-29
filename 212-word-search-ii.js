/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class Trie {
  constructor() {
    this.word = null
    this.children = new Map()
  }
  add(word) {
    let cur = this
    for (let i = 0; i < word.length; i++) {
      if (!cur.children.has(word[i])) {
        cur.children.set(word[i], new Trie())
      }
      cur = cur.children.get(word[i])
    }
    cur.word = word
  }
  addArr(words) {
    words.forEach(word => this.add(word))
  }
}

const findWords = function(board, words) {
  const trie = new Trie()
  trie.addArr(words)
  const results = []
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, trie, results, dirs)
    }
  }
  return results
}

const dfs = (board, i, j, trie, results, dirs) => {
  if(i < 0 || j < 0 || i >= board.length || j >= board[0].length) return
  const char = board[i][j]
  if (!trie.children.has(char)) return

  const nextTrie = trie.children.get(char)
  if (nextTrie.word) {
    results.push(nextTrie.word)
    nextTrie.word = null
  }
  
  for(let dir of dirs) {
    board[i][j] = '#'
    dfs(board, i + dir[0], j + dir[1], nextTrie, results, dirs)
    board[i][j] = char
  }
  
}
