
/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
 const closestRoom = function (rooms, queries) {
  rooms.sort((a, b) => b[1] - a[1])
  const n = queries.length
  const minSize = Array(n).fill(0).map((_, i) => i)
    .sort((a, b) => queries[b][1] - queries[a][1])

  const res = new Array(queries.length).fill(-1)
  const bst = new BinarySearchTree()
  let currentRoom = 0

  minSize.forEach((query) => {
    const [preferredRoom, minimumSize] = queries[query]
    if (rooms[0][1] < minimumSize) return

    while (currentRoom < rooms.length && rooms[currentRoom][1] >= minimumSize) {
      bst.add(rooms[currentRoom][0])
      currentRoom++
    }

    res[query] = bst.search(preferredRoom)
  })

  return res
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  add(val) {
    this.root = this.insert(this.root, val)
  }

  insert(node, val) {
    if (!node) return new TreeNode(val)
    if (node.val < val) {
      node.right = this.insert(node.right, val)
    } else {
      node.left = this.insert(node.left, val)
    }
    return node
  }

  search(val, node = this.root) {
    if (node.val === val) return val
    const currentDistance = Math.abs(node.val - val)
    const nextChild = node.val < val ? node.right : node.left
    if (!nextChild) return node.val
    const closestChild = this.search(val, nextChild)
    const childDistance = Math.abs(closestChild - val)
    if (childDistance < currentDistance) return closestChild
    if (childDistance === currentDistance)
      return Math.min(closestChild, node.val)
    return node.val
  }
}

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
