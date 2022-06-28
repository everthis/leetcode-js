/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = function(low, high) {
  const res = []
  
  let q = []
  for(let i = 1; i <= 9; i++) q.push(i)
  
  while(q.length) {
    const tmp = []
    const size = q.length
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      if(cur >= low && cur <= high) {
        res.push(cur)
      }
      if(cur > high) break
      const last = cur % 10
      if(last === 9) continue
      tmp.push(cur * 10 + last + 1)
    }
    
    q = tmp
  }
  
  return res
};

// another

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = function(low, high) {
   const set = new Set()
   let start = 0, end = 0
   for(let i = 10; i >= 0; i--) {
     if (low / (10 ** i) >= 1) {
       start = ~~(low / (10 ** i))
       break
     }
   }
   for(let i = 10; i >= 0; i--) {
     if (high / (10 ** i) >= 1) {
       end = ~~(high / (10 ** i))
       break
     }
   }
  for(let i = 1; i <= 9; i++) {
   helper(`${i}`)    
  }

   const res = Array.from(set)
  res.sort((a, b) => a- b)
  return res
   
  function helper(s) {
    // console.log(s)
    if(+s > high) return
    if(+s >= low && +s <= high) {
      set.add(+s)
    }
    if(s[s.length - 1] === '9') return
    helper(`${s}${+s[s.length - 1] + 1}`)
  }
};
