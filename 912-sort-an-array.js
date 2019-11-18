/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(items, l, r) {
  const temp = items[l];
  items[l] = items[r];
  items[r] = temp;
}
function partition(items, left, right) {
  let pivot = items[left + Math.floor((right - left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  if (items.length > 1) {
    const index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}
const sortArray = function(nums) {
  return quickSort(nums, 0, nums.length - 1);
};
