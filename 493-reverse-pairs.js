/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = function(nums) {
    return mergeSort(nums, [], 0, nums.length-1);
};

function mergeSort(arr, temp, left, right){
    let mid = Math.floor((left+right)/2), count = 0;
    if(left<right){
        count+= mergeSort(arr, temp, left, mid);
        count+= mergeSort(arr, temp, mid+1, right);
        count+= merge(arr, temp, left, mid+1, right);
    }
    return count;
}

function merge(a, temp, left, mid, right){
    let i = left, j = mid, k = left, count=0;
    for(let y=left; y<mid; y++){
        while(j<=right && (a[y]>2*a[j])){
            j++;
        }
        count+= (j-(mid));
    }
    i=left;
    j=mid;
    while(i<=(mid-1) && j<=right){
        if (a[i]>(a[j])) {
            temp[k++] = a[j++];
        } else {
            temp[k++] = a[i++];
        }
    }
    while(i<=(mid-1)){
        temp[k++] = a[i++];
    }
    while(j<=right){
        temp[k++] = a[j++];
    }
    for(let x=left; x<=right; x++){
        a[x] = temp[x];
    }
    return count;
}

// another

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
