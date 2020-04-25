const MyCalendarTwo = function () {
  this.calendar = []
  this.overlaps = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  for (let i = 0; i < this.overlaps.length; i++) {
    if (start < this.overlaps[i].end && end > this.overlaps[i].start)
      return false
  }

  for (let i = 0; i < this.calendar.length; i++) {
    if (start < this.calendar[i].end && end > this.calendar[i].start)
      this.overlaps.push({
        start: Math.max(start, this.calendar[i].start),
        end: Math.min(end, this.calendar[i].end),
      })
  }
  this.calendar.push({ start: start, end: end })
  return true
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
