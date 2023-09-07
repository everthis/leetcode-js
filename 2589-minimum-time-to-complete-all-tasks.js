/**
 * @param {number[][]} tasks
 * @return {number}
 */
const findMinimumTime = function(tasks) {
  let maxEnd = -Infinity
  for(const [s,e,d] of tasks) {
    maxEnd = Math.max(maxEnd, e)
  }
  // console.log(maxEnd)
  const endSlots = Array(maxEnd + 1).fill(0)
  tasks.sort((a, b) => a[1] - b[1])
  const n = tasks.length
  for(let i = 0; i < n; i++) {
    const cur = tasks[i]
    let [s, e, d] = cur
    for(let j = s; j <= e; j++) {
      if(endSlots[j]) d--
    }
    let t = e
    while(d > 0) {
      if(endSlots[t] === 0) {
        endSlots[t] = 1
        d--
      }
      t--
    }
  }
  
  return endSlots.reduce((ac, e) => ac + e, 0)
};
