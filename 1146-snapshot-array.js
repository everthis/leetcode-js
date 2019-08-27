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
