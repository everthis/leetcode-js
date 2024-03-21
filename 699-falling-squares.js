class Interval {
  constructor(s,e,h) {
    this.start = s
    this.end = e
    this.height = h
  }
}
/**
 * @param {number[][]} positions
 * @return {number[]}
 */
const fallingSquares = function(positions) {
  const n = positions.length
  const res = []
  const intervals = []
  let curMax = 0
  for(let i = 0; i < n; i++) {
    const [s, len] = positions[i]
    const ins = new Interval(s, s + len, len)
    curMax = Math.max(curMax, getHeight(intervals, ins))
    res.push(curMax)
  }
  
  return res
};

function getHeight(intervals, ins) {
  let preMax = 0
  for(const e of intervals) {
    if(ins.start >= e.end) continue
    if(ins.end <= e.start) continue
    preMax = Math.max(preMax, e.height)
  }
  
  ins.height += preMax
  intervals.push(ins)
  return ins.height
}

// another

/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  let ranges = [{ left: 0, height: 0, right: 1e8 + 1e6 }], rtn = [], max = 0

  outer:
  for (let [left, length] of positions) {
    let curHeight = 0, startI = -1, right = left + length, newRanges = []
    for (let i = 0; i < ranges.length; i++) {
      let range = ranges[i]
      if (left < range.right && startI == -1) {
        startI = i
        // left part
        if (left != range.left) {
          newRanges.push({
            left: range.left,
            height: range.height,
            right: left
          })
        }
      }
      if (startI != -1) {
        curHeight = Math.max(curHeight, range.height)
      }
      if (right <= range.right) {
        // added part
        let newHeight = length + curHeight
        newRanges.push({
          left,
          height: newHeight,
          right,
        })
        // right part
        if (right != range.right) {
          newRanges.push({
            left: right,
            height: range.height,
            right: range.right,
          })
        }
        max = Math.max(newHeight, max)
        rtn.push(max)
        // replace
        ranges.splice(startI, i - startI + 1, ...newRanges)
        continue outer
      }
    }
  }
  return rtn
};
