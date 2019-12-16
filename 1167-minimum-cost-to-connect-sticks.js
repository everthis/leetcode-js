/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  if (sticks.length < 1) return 0
  let size = sticks.length - 1
  let i = Math.floor(sticks.length / 2)
  for (; i >= 0; i--) {
    heapify(sticks, i, size)
  }
  let cost = 0
  while (size >= 1) {
    const temp = sticks[0]
    sticks[0] = sticks[size--]
    heapify(sticks, 0, size)
    sticks[0] = sticks[0] + temp
    cost += sticks[0]
    heapify(sticks, 0, size)
  }
  return cost
}
const heapify = (arr, index, size) => {
  let smallest = index
  let l = index * 2 + 1
  let r = index * 2 + 2
  if (l <= size && arr[l] < arr[smallest]) {
    smallest = l
  }
  if (r <= size && arr[r] < arr[smallest]) {
    smallest = r
  }
  if (smallest != index) {
    swap(arr, index, smallest)
    heapify(arr, smallest, size)
  }
}
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
