/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const n = fruits.length
  const segTree = new SegmentTree(baskets)
  let unplaced = 0

  for (const fruit of fruits) {
    const idx = segTree.query(fruit)
    if (idx === -1) {
      unplaced++
    } else {
      segTree.update(idx, -1)
    }
  }
  return unplaced
}
class SegmentTree {
  constructor(baskets) {
    this.n = baskets.length
    this.tree = new Array(4 * this.n)
    this.build(baskets, 1, 0, this.n - 1)
  }

  build(baskets, node, start, end) {
    if (start === end) {
      this.tree[node] = baskets[start]
    } else {
      const mid = Math.floor((start + end) / 2)
      this.build(baskets, 2 * node, start, mid)
      this.build(baskets, 2 * node + 1, mid + 1, end)
      this.tree[node] = Math.max(this.tree[2 * node], this.tree[2 * node + 1])
    }
  }

  update(pos, val) {
    this.updateNode(1, 0, this.n - 1, pos, val)
  }

  updateNode(node, start, end, pos, val) {
    if (start === end) {
      this.tree[node] = val
    } else {
      const mid = Math.floor((start + end) / 2)
      if (pos <= mid) {
        this.updateNode(2 * node, start, mid, pos, val)
      } else {
        this.updateNode(2 * node + 1, mid + 1, end, pos, val)
      }
      this.tree[node] = Math.max(this.tree[2 * node], this.tree[2 * node + 1])
    }
  }

  query(required) {
    if (this.tree[1] < required) return -1
    return this.queryNode(1, 0, this.n - 1, required)
  }

  queryNode(node, start, end, required) {
    if (start === end) {
      return start
    }
    const mid = Math.floor((start + end) / 2)
    if (this.tree[2 * node] >= required) {
      return this.queryNode(2 * node, start, mid, required)
    } else {
      return this.queryNode(2 * node + 1, mid + 1, end, required)
    }
  }
}
