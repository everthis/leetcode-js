/**
 * @param {number[][]} tasks
 * @return {number}
 */
const findMinimumTime = function(tasks) {
  tasks.sort((a, b) => a[1] - b[1])
  const {max} = Math
  let maxEnd = -1
  for(const [s,e,d] of tasks) maxEnd = max(maxEnd, e)
  const arr = Array(maxEnd + 1).fill(0)
  const n = tasks.length

  for(let i = 0; i < n; i++) {
    let [s, e, d] = tasks[i]
    let overlap = 0
    for(let j = e; j >= s; j--) {
      if(arr[j]) overlap++
    }
    if(overlap >= d) continue
    let diff = d - overlap
    for(let j = e; j >= s; j--) {
      if(arr[j] === 0) {
        diff--
        arr[j] = 1
      } else continue
      if(diff === 0) break
    }

  }

  return arr.reduce((ac, e) => ac + e, 0)
};

// another

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
