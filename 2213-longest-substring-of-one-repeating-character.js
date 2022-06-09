/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
const longestRepeating = function(s, queryCharacters, queryIndices) {
  let n = queryCharacters.length
  const ans = []

  const segmentTree = new SegmentTree(s)
  for (let i = 0; i < n; i++) {
    segmentTree.update(1, 0, s.length - 1, queryIndices[i], queryCharacters[i])
    ans.push(segmentTree.getMax())
  }

  return ans
};

class TreeNode {
  constructor(max, preStart, preEnd, sufStart, sufEnd) {
    this.max = max
    this.preStart = preStart
    this.preEnd = preEnd
    this.sufStart = sufStart
    this.sufEnd = sufEnd
  }
}

class SegmentTree {
  constructor(s) {
    this.n = s.length
    this.s = s.split('')
    this.tree = new Array(4 * s.length)
    this.build(s, 1, 0, s.length - 1)
  }

  build(s, treeIndex, left, right) {
    if (left === right) {
      this.tree[treeIndex] = new TreeNode(1, left, left, right, right)
      return
    }

    let mid = left + Math.floor((right - left) / 2)
    this.build(s, treeIndex * 2, left, mid)
    this.build(s, treeIndex * 2 + 1, mid + 1, right)

    this.tree[treeIndex] = this.merge(
      this.tree[treeIndex * 2],
      this.tree[treeIndex * 2 + 1],
      left,
      mid,
      right
    )
  }

  update(treeIndex, left, right, index, val) {
    if (left === right) {
      this.tree[treeIndex] = new TreeNode(1, left, left, right, right)
      this.s[index] = val
      return
    }

    let mid = left + Math.floor((right - left) / 2)
    if (mid < index) {
      this.update(treeIndex * 2 + 1, mid + 1, right, index, val)
    } else {
      this.update(treeIndex * 2, left, mid, index, val)
    }

    this.tree[treeIndex] = this.merge(
      this.tree[treeIndex * 2],
      this.tree[treeIndex * 2 + 1],
      left,
      mid,
      right
    )
  }

  merge(l, r, left, mid, right) {
    let max = Math.max(l.max, r.max)
    let preStart = l.preStart
    let preEnd = l.preEnd
    let sufStart = r.sufStart
    let sufEnd = r.sufEnd

    if (this.s[mid] === this.s[mid + 1]) {
      max = Math.max(max, r.preEnd - l.sufStart + 1)
      if (l.preEnd - l.preStart + 1 === mid - left + 1) {
        preEnd = r.preEnd
      }
      if (r.sufEnd - r.sufStart + 1 === right - mid) {
        sufStart = l.sufStart
      }
    }

    return new TreeNode(max, preStart, preEnd, sufStart, sufEnd)
  }

  getMax() {
    return this.tree[1].max
  }
}


