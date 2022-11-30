/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function (root) {
  let res = 0
  let q = []
  q.push(root)

  while (q.length) {
    const nxt = []
    res += minSwaps(
      q.map((e) => e.val),
      q.length
    )
    const len = q.length

    for (let i = 0; i < len; i++) {
      const cur = q[i]
      if (cur.left) nxt.push(cur.left)
      if (cur.right) nxt.push(cur.right)
    }

    q = nxt
  }

  return res
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Return the minimum number
// of swaps required to sort
// the array
function minSwaps(arr, len) {
  let ans = 0
  const temp = arr.slice()

  // Hashmap which stores the
  // indexes of the input array
  const h = new Map()

  temp.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    h.set(arr[i], i)
  }
  for (let i = 0; i < len; i++) {
    // This is checking whether
    // the current element is
    // at the right place or not
    if (arr[i] !== temp[i]) {
      ans++
      const init = arr[i]

      // If not, swap this element
      // with the index of the
      // element which should come here
      swap(arr, i, h.get(temp[i]))

      // Update the indexes in
      // the hashmap accordingly
      h.set(init, h.get(temp[i]))
      h.set(temp[i], i)
    }
  }
  return ans
}
