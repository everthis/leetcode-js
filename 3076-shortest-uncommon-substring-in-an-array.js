/**
 * @param {string[]} arr
 * @return {string[]}
 */
const shortestSubstrings = function (arr) {
  const ans = []
  const head = new Node()
  for (const s of arr) {
    for (let i = 0; i < s.length; ++i) add(head, s, i)
  }
  for (const s of arr) {
    let res = s + s
    for (let i = 0; i < s.length; ++i) remove(head, s, i)
    for (let i = 0; i < s.length; ++i) {
      const t = check(head, s, i)
      if (t.length < res.length || (t.length === res.length && t < res)) res = t
    }
    ans.push(res.length <= s.length ? res : "")
     // add back the current string to the trie
    for (let i = 0; i < s.length; ++i) add(head, s, i)
  }
  return ans

  function add(head, s, ind) {
    let ptr = head
    for (let i = ind; i < s.length; ++i) {
      const c = s.charCodeAt(i) - "a".charCodeAt(0)
      if (ptr.child[c] === null) ptr.child[c] = new Node()
      ptr = ptr.child[c]
      ptr.count++
    }
  }

  function remove(head, s, ind) {
    let ptr = head
    for (let i = ind; i < s.length; ++i) {
      ptr = ptr.child[s.charCodeAt(i) - "a".charCodeAt(0)]
      ptr.count--
    }
  }

  function check(head, s, ind) {
    let ptr = head
    let ans = ""
    for (let i = ind; i < s.length; ++i) {
      const c = s.charCodeAt(i) - "a".charCodeAt(0)
      if (ptr.child[c] === null) return ans
      ans += s[i]
      ptr = ptr.child[c]
      if (ptr.count < 1) return ans
    }
    return s + s
  }
}

class Node {
  constructor() {
    this.child = new Array(26).fill(null)
    this.count = 0
  }
}

// another


/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function(arr) {
function* gen(s) {
  const s_len = s.length
  for (let i = 0; i < s_len; i++) {
    for (let j = i; j < s_len; j++) {
      yield s.slice(i, j + 1)
    }
  }
}

const ans = []
const n = arr.length
for (let i = 0; i < n; i++) {
  const cur_s = arr[i]
  let cur_ans = null
  for (const s of gen(cur_s)) {
    if (arr.filter((_, j) => j !== i).every((str) => !str.includes(s))) {
      if (cur_ans === null) {
        cur_ans = s
      } else if (s.length < cur_ans.length) {
        cur_ans = s
      } else if (s.length === cur_ans.length && s < cur_ans) {
        cur_ans = s
      }
    }
  }
  ans.push(cur_ans || '')
}
return ans  
};
