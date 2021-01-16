/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = function (nums, target, comparator) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >>> 1);
    let midValue = nums[mid];
    let cmp = comparator(midValue, target);
    if (cmp < 0) low = mid + 1;
    else if (cmp > 0) high = mid - 1;
    else return mid;
  }
  return -(low + 1);
};

/**
 * @param {number} length
 */
const SnapshotArray = function (length) {
  this.count = 0;
  this.arr = Array.from({ length: length }, () => [[0, 0]]);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  const arr = this.arr,
    count = this.count;
  if (arr[index][arr[index].length - 1][0] === count) {
    arr[index][arr[index].length - 1][1] = val;
  } else {
    arr[index].push([count, val]);
  }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  return this.count++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  let idx = binarySearch(this.arr[index], [snap_id, 0], (a, b) => a[0] - b[0]);
  if (idx < 0) idx = -idx - 2;
  return this.arr[index][idx][1];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */


// another

/**
 * @param {number} length
 */
const SnapshotArray = function(length) {
  this.arr = new Array(length).fill(0);
  this.snaps = new Array(length);
  this.count = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  if (this.snaps[index] == undefined) {
    this.snaps[index] = {};
  }

  this.snaps[index][this.count] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.count++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  if (this.snaps[index] == undefined) return 0;

  let res = 0;
  while (snap_id >= 0) {
    if (this.snaps[index][snap_id] == undefined) {
      snap_id--;
    } else {
      res = this.snaps[index][snap_id];
      snap_id = -1;
    }
  }

  return res;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
