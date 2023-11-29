/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
  const n = rooms.length
  const k = queries.length
  const indexes = new Array(k)
  for (let i = 0; i < k; i++) {
    indexes[i] = i
  }
  rooms.sort((a, b) => b[1] - a[1]) // Sort by decreasing order of room size
  indexes.sort((a, b) => queries[b][1] - queries[a][1]) // Sort by decreasing order of query minSize
  const roomIdsSoFar = new Set()
  const ans = new Array(k)
  let i = 0
  for (const index of indexes) {
    while (i < n && rooms[i][1] >= queries[index][1]) {
      // Add id of the room which its size >= query minSize
      roomIdsSoFar.add(rooms[i++][0])
    }
    ans[index] = searchClosetRoomId(roomIdsSoFar, queries[index][0])
    if (ans[index] == Infinity || ans[index] == -Infinity) ans[index] = -1
  }
  return ans

  function searchClosetRoomId(treeSet, preferredId) {
    let floor = -Infinity
    let ceiling = Infinity
    for (const id of treeSet) {
      if (id <= preferredId) {
        floor = Math.max(floor, id)
      } else {
        ceiling = Math.min(ceiling, id)
      }
    }
    if (floor === -Infinity) {
      return ceiling
    } else if (ceiling === Infinity) {
      return floor
    } else if (preferredId - floor <= ceiling - preferredId) {
      return floor
    } else {
      return ceiling
    }
  }
}

// another

/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
const closestRoom = function (rooms, queries) {
  const n = rooms.length
  const m = queries.length
  const idxArr = Array.from({ length: m }, (_, i) => i)
  const res = []
  rooms.sort((a, b) => b[1] - a[1])
  idxArr.sort((a, b) => queries[b][1] - queries[a][1])
  const set = new Set()
  let j = 0
  for (let i = 0; i < m; i++) {
    const q = queries[idxArr[i]]
    while (j < n && rooms[j][1] >= q[1]) {
      set.add(rooms[j][0])
      j++
    }
    res[idxArr[i]] = helper(q[0])
  }

  return res

  function helper(preferedId) {
    let floor = -Infinity,
      ceil = Infinity
    for (const roomId of set) {
      if (roomId < preferedId && roomId > floor) {
        floor = roomId
      }
      if (roomId >= preferedId && roomId < ceil) {
        ceil = roomId
      }
    }
    let res = -1
    if (floor === -Infinity) {
      res = ceil
    } else if (ceil === Infinity) {
      res = floor
    } else {
      if (preferedId - floor === ceil - preferedId) {
        res = floor
      } else if (preferedId - floor < ceil - preferedId) {
        res = floor
      } else {
        res = ceil
      }
    }

    return res === Infinity || res === -Infinity ? -1 : res
  }
}


// another

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
