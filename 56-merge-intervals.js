/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = []
  let cur = intervals[0]
  const n = intervals.length
  res.push(cur)
  for(let i = 1; i < n; i++) {
    const e = intervals[i]
    if(e[0] <= cur[1]) {
      cur[1] = Math.max(e[1], cur[1])
    } else {
      res.push(e)
      cur = e
    }
  }
  
  return res
};

// another

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const res = [intervals[0]]
  for(let i = 1, n = intervals.length; i < n; i++) {
    const [s, e] = intervals[i]
    const pre = res[res.length - 1]
    if(s <= pre[1]) {
      pre[1] = Math.max(pre[1], e)
    } else {
      res.push(intervals[i])
    }
  }
  return res
};

// another


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  if(intervals == null || intervals.length === 0) return []
  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  const res = [intervals[0]]
  for(let i = 1, n = intervals.length; i < n; i++) {
    const last = res[res.length - 1]
    const lastEnd = last[1]
    const [s, e] = intervals[i]
    if(s > lastEnd) {
      res.push(intervals[i])
    } else {
      last[1] = Math.max(last[1], e)
    }
  }
  return res
};

// another

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = function(intervals) {
    const hash = {}
    intervals.forEach(el => {
        if (hash.hasOwnProperty(el.start)) {
            hash[el.start][1] = Math.max(hash[el.start][1], el.end)
        } else {
            hash[el.start] = [el.start, el.end]
        }
    })

    const startArr = Object.keys(hash).sort((a, b) => +a - +b)
    const res = []

    while(startArr.length) {
        let start = startArr.shift()
        let end = hash[start][1]
        
        for(let i = 0; i < startArr.length; ) {
            if (+startArr[i] <= end) {
                end = Math.max(end, hash[startArr[i]][1])
                startArr.shift()
            } else {
                break
            }
        }
        let ins = new Interval(+start, end)
        res.push(ins)

    }
    return res
};
