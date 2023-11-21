/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countPairs = function (nums, low, high) {
  const trie = new Trie()

  let ans = 0
  for (let x of nums) {
    ans += trie.count(x, high + 1) - trie.count(x, low)
    trie.insert(x)
  }
  return ans
}

class Trie {
  constructor() {
    this.root = {}
  }
  insert(val) {
    let node = this.root
    for (let i = 14; i >= 0; i--) {
      let bit = (val >> i) & 1
      if (!(bit in node)) node[bit] = { cnt: 1 }
      else node[bit]['cnt'] += 1
      node = node[bit]
    }
  }
  count(val, high) {
    let ans = 0
    let node = this.root
    for (let i = 14; i >= 0; i--) {
      if (!node) break
      const bit = (val >> i) & 1
      const cmp = (high >> i) & 1
      if (cmp) {
        if (node[bit]) ans += node[bit]['cnt']
        node = node[1 ^ bit]
      } else node = node[bit]
    }

    return ans
  }
}


// another

/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countPairs = function(nums, low, high) {
  let res = 0, n = nums.length, trie = { cnt: 0 }
  for(const e of nums) {
    res += helper(e, high + 1) - helper(e, low)
    insert(e)
  }
  return res
  
  function helper(e, limit) {
    let res = 0, cur = trie
    for(let i = 14; i >= 0; i--) {
      const a = (e >> i) & 1
      const b = (limit >> i) & 1
      if(cur == null) break
      if(b === 0) {
        cur = cur[a]
        continue
      }
      if(cur[a]) {
        res += cur[a].cnt
      }
      cur = cur[1 - a]
    }
    
    return res
  }
  
  function insert(e) {
    let cur = trie
    for(let i = 14; i >= 0; i--) {
      const tmp = (e >> i) & 1
      if(!(tmp in cur)) cur[tmp] = {cnt:0}
      cur[tmp].cnt++
      cur = cur[tmp]
    }
  }
  
};
