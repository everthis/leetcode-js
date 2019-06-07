const find = (cals, time, count) => {
  let l = 0
  let r = cals.length
  let mid
  while (l < r) {
    mid = Math.trunc((l + r) / 2)
    if (cals[mid][0] === time) {
      cals[mid][1] += count
      return
    } else if (cals[mid][0] < time) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  cals.splice(l, 0, [time, count])
}
const MyCalendarThree = function() {
  this.cals = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  let idx = find(this.cals, start, 1)
  idx = find(this.cals, end, -1)
  let count = 0
  let max = 0
  for (let cal of this.cals) {
    count += cal[1]
    max = Math.max(max, count)
  }
  return max
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
