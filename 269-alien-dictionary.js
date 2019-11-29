/**

There is a new alien language which uses the latin alphabet. 
However, the order among letters are unknown to you. 
You receive a list of non-empty words from the dictionary, 
where words are sorted lexicographically by the rules of
this new language. Derive the order of letters in this language.

Example 1:

Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"
Example 2:

Input:
[
  "z",
  "x"
]

Output: "zx"
Example 3:

Input:
[
  "z",
  "x",
  "z"
] 

Output: "" 

Explanation: The order is invalid, so return "".
Note:

You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.

*/

/**
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = function(words) {
  const graph = {}
  words.forEach(w => w.split('').forEach(ch => (graph[ch] = new Set())))
  words.reduce((prev, curr) => {
    for (let i = 0; i < Math.min(prev.length, curr.length); i++) {
      if (prev[i] !== curr[i]) {
        graph[prev[i]].add(curr[i])
        break
      }
    }
    return curr
  })
  const marked = {},
    visited = {}
  let str = ''
  let hasCycle = false
  Object.keys(graph).map(visit)
  return hasCycle ? '' : str
  function visit(n) {
    if (marked[n]) return
    if (visited[n]) {
      hasCycle = true
      return
    }
    visited[n] = true
    graph[n].forEach(visit)
    marked[n] = true
    str = n + str
  }
}
