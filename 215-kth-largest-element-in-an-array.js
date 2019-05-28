/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  if (!nums || k > nums.length) return 0;

  const larger = [];
  const smaller = [];
  const pivot = nums[parseInt(nums.length / 2)];
  let pivotCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];

    if (ele > pivot) larger.push(ele);
    else if (ele === pivot) pivotCount++;
    else smaller.push(ele);
  }

  if (larger.length >= k) return findKthLargest(larger, k);
  else if (k - larger.length - pivotCount <= 0) return pivot;
  else return findKthLargest(smaller, k - larger.length - pivotCount);
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  return quickselect(nums, 0, nums.length - 1, k)
};
function quickselect(arr, lo, hi, k) {
  let pivtIdx = Math.floor(Math.random() * (hi - lo + 1)) + lo
  let pivtVal = arr[pivtIdx]
  ;[arr[hi], arr[pivtIdx]] = [arr[pivtIdx], arr[hi]]
  let i = lo
  let j = hi - 1

  while (i <= j) {
    if (arr[i] <= pivtVal) {
      i++
    } else {
      ;[arr[j], arr[i]] = [arr[i], arr[j]]
      j--
    }
  }

  ;[arr[i], arr[hi]] = [arr[hi], arr[i]]

  pivtIdx = i

  if (pivtIdx === arr.length - k) return arr[pivtIdx]
  if (pivtIdx < arr.length - k) return quickselect(arr, pivtIdx + 1, hi, k)
  return quickselect(arr, lo, pivtIdx - 1, k)
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(list, k) {
  const len = list.length
  let lo = 0
  let hi = len - 1
  let pivot = 0
  let t = len - k
  while(lo < hi) {
    pivot = partition(list, lo, hi)
    if(pivot === t) {
      break
    } else if(pivot < t) {
      lo = pivot + 1
    } else if(pivot > t) {
      hi = pivot - 1
    }
  }
  
  return list[t]
}

function partition(arr, s, e) {
  let t = arr[e]
  let i = s
  for(let j = s; j <= e - 1; j++) {
    if(arr[j] <= t) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, e) 
  return i
}

function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

