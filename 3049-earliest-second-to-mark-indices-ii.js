function heapfy_up(heap, current) {
  if (current == 1) return
  let parent = current >> 1
  if (heap[current] < heap[parent]) {
    ;[heap[parent], heap[current]] = [heap[current], heap[parent]]
    heapfy_up(heap, parent)
  }
}

function heapfy_down(heap, current) {
  let left = current << 1
  let right = (current << 1) + 1
  let min = current
  if (left < heap.length && heap[left] < heap[min]) min = left
  if (right < heap.length && heap[right] < heap[min]) min = right
  if (min != current) {
    ;[heap[min], heap[current]] = [heap[current], heap[min]]
    heapfy_down(heap, min)
  }
}

function heap_pop(heap) {
  ;[heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]]
  heap.pop()
  heapfy_down(heap, 1)
}

function heap_push(heap, num) {
  heap.push(num)
  heapfy_up(heap, heap.length - 1)
}

/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function (nums, changeIndices) {
  const search = function (ceil) {
    let heap = [0]
    let set = new Set()
    let is_first = new Array(ceil).fill(false)
    for (let i = 0; i <= ceil - 1; i++) {
      if (set.has(changeIndices[i])) continue
      else {
        set.add(changeIndices[i])
        is_first[i] = true
      }
    }

    for (let i = ceil - 1; i >= 0; i--) {
      let max_size = (ceil - i + 1) >> 1
      if (nums[changeIndices[i] - 1] == 0) continue
      if (is_first[i] == false) continue
      if (heap.length - 1 < max_size) {
        heap_push(heap, nums[changeIndices[i] - 1])
        continue
      } else {
        if (heap[1] < nums[changeIndices[i] - 1]) {
          heap_pop(heap)
          heap_push(heap, nums[changeIndices[i] - 1])
          continue
        }
      }
    }

    let days_on_hand = ceil + 1 - heap.length + 1
    let days_need = nums.length
    for (let num of nums) days_need += num
    for (let i = 1; i <= heap.length - 1; i++) {
      days_need -= heap[i]
    }

    if (days_need > days_on_hand) return -1
    else return 1
  }

  let r = changeIndices.length - 1
  let l = nums.length - 1
  if (search(r) == -1) return -1

  while (l < r) {
    let mid = (l + r) >> 1
    let res = search(mid)
    if (res == -1) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  return l + 1
}
