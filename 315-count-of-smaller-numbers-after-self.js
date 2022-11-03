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

// another

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function(nums) {
  
  const arr = []
  const n = nums.length
  for(let i = 0; i < n; i++) {
    arr.push([nums[i], i])
  }
  
  const res = Array(n).fill(0)
  cntSmaller(arr, 0, n - 1, res)
  
  return res
  
  function cntSmaller(arr, l, r, res) {
    if(l >= r) return
    
    const mid = ~~((l + r) / 2)
    cntSmaller(arr, l, mid, res)
    cntSmaller(arr, mid + 1, r, res)
    let leftPos = l, rightPos = mid + 1, cnt = 0
    const merged = []
    while(leftPos < mid + 1 && rightPos <= r) {
      if(arr[leftPos][0] > arr[rightPos][0]) {
        cnt++
        merged.push(arr[rightPos])
        rightPos++
      } else {
        res[arr[leftPos][1]] += cnt
        merged.push(arr[leftPos])
        leftPos++
      }
    }
    
    while(leftPos < mid + 1) {
      res[arr[leftPos][1]] += cnt
      merged.push(arr[leftPos])
      leftPos++
    }
    
    while(rightPos <= r) {
      merged.push(arr[rightPos])
      rightPos++
    }
    
    for(let i = l; i <= r; i++) {
      arr[i] = merged[i - l]
    }
    
  }
};
