/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
const smallestStringWithSwaps = function(s, pairs) {
  let set = Array(s.length).fill(-1)
  function union(a, b) {
    let root1 = find(a)
    let root2 = find(b)
    if (root1 !== root2) {
      set[root2] = root1
    }
  }
  function find(a) {
    if (set[a] < 0) {
      return a
    } else {
      return (set[a] = find(set[a]))
    }
  }
  for (let pair of pairs) {
    union(pair[0], pair[1])
  }
  let groups = []
  for (let i = 0; i < s.length; i++) {
    groups[i] = []
  }
  for (let i = 0; i < s.length; i++) {
    groups[find(i)].push(i)
  }
  let sArr = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (groups[i].length > 1) {
      let chars = groups[i].map(idx => s[idx])
      chars.sort()
      for (let k = 0; k < groups[i].length; k++) {
        sArr[groups[i][k]] = chars[k]
      }
    }
  }
  return sArr.join('')
}
