/**
 * Initialize your data structure here.
 */
const SummaryRanges = function() {
  this.intervals = [];
  this.map = Object.create(null);
};
/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  if (this.map[val]) {
    return;
  }
  let l = this.map[val - 1] || 0;
  let r = this.map[val + 1] || 0;
  let len = l + r + 1;
  this.map[val - l] = len;
  this.map[val] = len;
  this.map[val + r] = len;
  let low = 0;
  let high = this.intervals.length;
  while (low < high) {
    let mid = (low + high) >> 1;
    if (this.intervals[mid][1] < val) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  if (len === 1) {
    this.intervals.splice(low, 0, [val, val]);
  } else if (l > 0 && r > 0) {
    let max = this.intervals[low][1];
    this.intervals.splice(low, 1);
    this.intervals[low - 1][1] = max;
  } else if (l > 0) {
    this.intervals[low - 1][1] = val;
  } else {
    this.intervals[low][0] = val;
  }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  return this.intervals;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
