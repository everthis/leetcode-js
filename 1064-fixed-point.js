/**
 * @param {number[]} arr
 * @return {number}
 */
const fixedPoint = function(arr) {
  const n = arr.length
  let l = 0, r = n - 1
  while(l < r) {
    const mid = l + ((r - l) >> 1)
    if(arr[mid] < mid) l =  mid + 1
    else if(arr[mid] > mid) r = mid - 1
    else r = mid
  }
  return arr[l] === l ? l : -1
};
