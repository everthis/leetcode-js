/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(items, l, r) {
  const temp = items[l];
  items[l] = items[r];
  items[r] = temp;
}
function partition(items, start, end) {
  let pivot = items[end], s = start
  for(let i = start; i < end; i++) {
    if(items[i] <= pivot) {
      swap(items, s, i)
      s++
    }
  }
  swap(items, s, end)
  return s
}

function quickSort(items, left, right) {
  if(left < right) {
    const pIdx = partition(items, left, right)
    quickSort(items, left, pIdx - 1)
    quickSort(items, pIdx + 1, right)
  }
  return items;
}
const sortArray = function(nums) {
  return quickSort(nums, 0, nums.length - 1);
};
