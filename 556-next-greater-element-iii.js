/**
 * @param {number} n
 * @return {number}
 */
const nextGreaterElement = function(n) {
  let i, j;
  const arr = (n + "").split("").map(el => +el);
  for (i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      break;
    }
  }
  if (i < 0) return -1;
  j = arr.length - 1;
  while (arr[j] <= arr[i]) {
    j--;
  }
  swap(arr, i, j);
  reverse(arr, i + 1, arr.length - 1);

  const res = arr.reduce((ac, el) => ac + el, "");
  return res > Math.pow(2, 31) - 1 ? -1 : +res
};

function swap(arr, i, j) {
  arr[i] ^= arr[j];
  arr[j] ^= arr[i];
  arr[i] ^= arr[j];
}

function reverse(arr, start, end) {
  let l = start;
  let h = end;
  while (l < h) {
    swap(arr, l++, h--);
  }
}
