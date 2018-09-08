/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function(timePoints) {
  const sortedArr = timePoints
    .map(el => {
      const arr = el.trim().split(":");
      return arr[0] === "00" && arr[1] === "00"
        ? 24 * 60
        : +arr[0] * 60 + +arr[1];
    })
    .sort((a, b) => a - b);
  let prev = sortedArr[0];
  let res = Number.MAX_SAFE_INTEGER;
  const mid = 12 * 60;
  for (let i = 1; i < sortedArr.length; i++) {
    res = Math.min(res, Math.abs(sortedArr[i] - prev));
    prev = sortedArr[i];
  }
  if (sortedArr[0] < mid && sortedArr[sortedArr.length - 1] > mid) {
    res = Math.min(
      res,
      sortedArr[0] + 2 * mid - sortedArr[sortedArr.length - 1]
    );
  }
  return res;
};

console.log(findMinDifference(["23:59", "00:00"]));
console.log(findMinDifference(["12:12", "00:13"]));
console.log(findMinDifference(["05:31", "22:08", "00:35"]));
