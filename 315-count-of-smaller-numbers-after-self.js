/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function(nums) {
  const numsAndIndexes = nums.map((x, i) => [x, i])
  const output = [...new Array(nums.length)].map(_ => 0)
  mergeSort(numsAndIndexes, output)
  return output
}

function mergeSort(arr, output) {
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, middle), output),
    right = mergeSort(arr.slice(middle), output)
  const sorted = []
  let i = 0,
    j = 0
  while (i < left.length || j < right.length) {
    if (i >= left.length) {
      sorted.push(right[j])
      j++
    } else if (j >= right.length) {
      sorted.push(left[i])
      i++
    } else {
      if (left[i][0] > right[j][0]) {
        sorted.push(left[i])
        output[left[i][1]] += right.length - j
        i++
      } else {
        sorted.push(right[j])
        j++
      }
    }
  }

  return sorted
}

// another

class Node {
  constructor(v, s) {
    this.val = v
    this.sum = s
    this.left = null
    this.right = null
    this.dup = 1
  }
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function(nums) {
  const ans = new Array(nums.length).fill(0)
  let root = null
  for (let i = nums.length - 1; i >= 0; i--) {
    root = insert(nums[i], root, ans, i, 0)
  }
  return ans
}

function insert(num, node, ans, i, preSum) {
  if (node == null) {
    node = new Node(num, 0)
    ans[i] = preSum
  } else if (node.val == num) {
    node.dup++
    ans[i] = preSum + node.sum
  } else if (node.val > num) {
    node.sum++
    node.left = insert(num, node.left, ans, i, preSum)
  } else {
    node.right = insert(num, node.right, ans, i, preSum + node.dup + node.sum)
  }
  return node
}
