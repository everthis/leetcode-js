/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
class SegmentTree {
  constructor(start = 0, end = 0, value = null, lazy = null, merge) {
    this.start = start
    this.end = end
    this.value = value
    this.lazy = lazy
    this.merge = merge
    this.left = null
    this.right = null
  }

  get mid() {
    return this.start + Math.floor((this.end - this.start) / 2)
  }

  build(arr) {
    return this.buildHelper(0, arr.length - 1, arr)
  }

  buildHelper(left, right, arr) {
    if (left > right) return null
    const root = new SegmentTree(left, right, arr[left], null, this.merge)
    if (left === right) return root
    const mid = Math.floor((left + right) / 2)
    root.left = this.buildHelper(left, mid, arr)
    root.right = this.buildHelper(mid + 1, right, arr)
    root.value = this.safeMerge(root.left?.value, root.right?.value)
    return root
  }

  build(left, right, defaultValue) {
    if (left > right) return null
    return new SegmentTree(left, right, defaultValue, null, this.merge)
  }

  update(root, l, r, v) {
    if (l <= root.start && r >= root.end) {
      root.value = v
      root.lazy = this.safeMerge(root.lazy, v)
      return
    }
    if (root.left === null || root.right === null) {
      const mid = root.mid
      if (root.left === null)
        root.left = this.build(root.start, mid, root.value)
      if (root.right === null)
        root.right = this.build(mid + 1, root.end, root.value)
    }
    this.pushDown(root)
    const mid = root.mid
    if (l <= mid) {
      this.update(root.left, l, r, v)
    }
    if (r > mid) {
      this.update(root.right, l, r, v)
    }
    root.value = this.merge(root.left.value, root.right.value)
  }

  pushDown(root) {
    if (root.lazy === null) return
    root.left.lazy = this.safeMerge(root.left.lazy, root.lazy)
    root.right.lazy = this.safeMerge(root.right.lazy, root.lazy)
    root.left.value = this.safeMerge(root.left.value, root.lazy)
    root.right.value = this.safeMerge(root.right.value, root.lazy)
    root.lazy = null
  }

  update(root, index, value) {
    if (root.start === index && root.end === index) {
      root.value = value
      return
    }
    if (root.left === null || root.right === null) {
      const mid = root.mid
      if (root.left === null)
        root.left = this.build(root.start, mid, root.value)
      if (root.right === null)
        root.right = this.build(mid + 1, root.end, root.value)
    }
    const mid = root.mid
    if (index <= mid) {
      this.update(root.left, index, value)
      root.value = this.safeMerge(root.left.value, root.right.value)
    } else {
      this.update(root.right, index, value)
      root.value = this.safeMerge(root.left.value, root.right.value)
    }
  }

  query(root, left, right) {
    if (left <= root.start && right >= root.end) {
      return root.value
    }
    if (root.left === null || root.right === null) {
      const mid = root.mid
      if (root.left === null)
        root.left = this.build(root.start, mid, root.value)
      if (root.right === null)
        root.right = this.build(mid + 1, root.end, root.value)
    }
    this.pushDown(root)
    const mid = root.mid
    let ans = null
    if (mid >= left) {
      ans = this.safeMerge(ans, this.query(root.left, left, right))
    }
    if (mid + 1 <= right) {
      ans = this.safeMerge(ans, this.query(root.right, left, right))
    }
    return ans
  }

  safeMerge(a, b) {
    if (a === null) return b
    if (b === null) return a
    return this.merge(a, b)
  }

  lazyMerge(a, b) {
    return b
  }
}

function findIndices(nums, indexDifference, valueDifference) {
  const root = new SegmentTree(0, 100005, [0, 0], null, (a, b) =>
    a[0] >= b[0] ? a : b,
  )
  for (let i = 0; i < nums.length; i++) {
    root.update(root, i, [nums[i], i])
  }

  for (let i = 0; i < nums.length; i++) {
    const left = i - indexDifference
    if (left >= 0) {
      const max = root.query(root, 0, left)
      if (max[0] - nums[i] >= valueDifference) {
        return [max[1], i]
      }
    }
    const right = i + indexDifference
    if (right < nums.length) {
      const max = root.query(root, right, nums.length - 1)
      if (max[0] - nums[i] >= valueDifference) {
        return [i, max[1]]
      }
    }
  }
  return [-1, -1]
}
