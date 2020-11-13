/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = function(nums) {
  return mergeSort(nums, 0, nums.length - 1);
};

function mergeSort(nums, s, e) {
  if (s >= e) return 0;
  let mid = s + Math.floor((e - s) / 2);
  let cnt = mergeSort(nums, s, mid) + mergeSort(nums, mid + 1, e);
  for (let i = s, j = mid + 1; i <= mid; i++) {
    while (j <= e && nums[i] / 2.0 > nums[j]) j++;
    cnt += j - (mid + 1);
  }
  sortSubArr(nums, s, e + 1);
  return cnt;
}

function sortSubArr(arr, s, e) {
  const tmp = arr.slice(s, e);
  tmp.sort((a, b) => a - b);
  arr.splice(s, e - s, ...tmp);
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
function merge(A, start, mid, end) {
  let n1 = mid - start + 1
  let n2 = end - mid
  const L = new Array(n1).fill(0)
  const R = new Array(n2).fill(0)

  for (let i = 0; i < n1; i++) L[i] = A[start + i]
  for (let j = 0; j < n2; j++) R[j] = A[mid + 1 + j]
  let i = 0,
    j = 0
  for (let k = start; k <= end; k++) {
    if (j >= n2 || (i < n1 && L[i] <= R[j])) A[k] = L[i++]
    else A[k] = R[j++]
  }
}

function mergesort_and_count(A, start, end) {
  if (start < end) {
    let mid = start + ((end - start) >> 1)
    let count =
      mergesort_and_count(A, start, mid) + mergesort_and_count(A, mid + 1, end)
    let j = mid + 1
    for (let i = start; i <= mid; i++) {
      while (j <= end && A[i] > A[j] * 2) j++
      count += j - (mid + 1)
    }
    merge(A, start, mid, end)
    return count
  } else return 0
}

function reversePairs(nums) {
  return mergesort_and_count(nums, 0, nums.length - 1)
}
