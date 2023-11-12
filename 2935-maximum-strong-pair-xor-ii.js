class Node {
  constructor() {
    this.links = [null, null]
    this.frequency = 0
  }

  containsKey(bit) {
    return this.links[bit] !== null
  }

  get(bit) {
    return this.links[bit]
  }

  put(bit, node) {
    this.links[bit] = node
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(num) {
    let node = this.root
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1
      if (!node.containsKey(bit)) {
        node.put(bit, new Node())
      }
      node = node.get(bit)
      node.frequency++
    }
  }

  getMax(num) {
    let node = this.root
    let res = 0
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1
      if (node.containsKey(1 - bit) && node.get(1 - bit).frequency > 0) {
        res = res | (1 << i)
        node = node.get(1 - bit)
      } else {
        if (node.containsKey(bit) && node.get(bit).frequency > 0) {
          node = node.get(bit)
        } else {
          return 0
        }
      }
    }
    return res
  }

  deleteKey(num) {
    let node = this.root
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1
      if (node.containsKey(bit)) {
        node = node.get(bit)
        node.frequency--
      } else {
        break
      }
    }
  }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumStrongPairXor(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  let maxi = 0
  let j = 0
  const t = new Trie()
  t.insert(nums[0])
  for (let i = 1; i < n; i++) {
    while (j < i && nums[i] - nums[j] > Math.min(nums[i], nums[j])) {
      t.deleteKey(nums[j])
      j++
    }
    maxi = Math.max(maxi, t.getMax(nums[i]))
    t.insert(nums[i])
  }
  return maxi
}

// another


const maximumStrongPairXor= (nums) => {
  const A = nums
  let res = 0;
  for (let i = 20; i >= 0; --i) {
    res <<= 1;
    let pref = new Map();
    let pref2 = new Map();
    for (let a of A) {
      let p = a >> i;
      if (!pref.has(p)) {
        pref.set(p, a);
        pref2.set(p, a);
      }
      pref.set(p, Math.min(pref.get(p), a));
      pref2.set(p, Math.max(pref2.get(p), a));
    }
    for (let [x, val] of pref) {
      let y = res ^ 1 ^ x;
      if (x >= y && pref.has(y) && pref.get(x) <= pref2.get(y) * 2) {
        res |= 1;
        break;
      }
    }
  }
  return res;
}
