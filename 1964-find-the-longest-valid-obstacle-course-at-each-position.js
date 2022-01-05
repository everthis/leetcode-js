/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length, res = [], stk = []
  for (let i = 0; i < n; i++) {
    const cur = obstacles[i]
    let idx = chk(cur)
    if (idx === stk.length) {
      stk.push(cur)
    } else {
      stk[idx] = cur
    }
    res.push(++idx)
  }

  return res

  function chk(val) {
    let l = 0, r = stk.length
    while(l < r) {
      const mid = ~~((l + r) / 2)
      if(stk[mid] <= val) l = mid + 1
      else r = mid
    }
    return l
  }
};

// another

/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length
  const stack = [], res = []
  let len = 0
  
  for(let i = 0; i < n; i++) {
    const cur = obstacles[i]
    const idx = chk(cur)
    if(idx === len) {
      stack.push(cur)
      len++
      res.push(len)
    }else {
      stack[idx] = cur
      res.push(idx + 1)
    }
  }

  return res
  
  function chk(x) {
    if(len && stack[len - 1] <= x) return len
    let l = 0, r = len - 1
    while(l < r) {
      const mid = ~~((l + r) / 2)
      if(stack[mid] <= x) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }
};




// another

/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length
  const stack = [], res = Array(n).fill(0)
  let m = 0
  let j = 0;
  for (let x of obstacles) {
    let i = chk(x);
    if (i == m) {
      ++m;
      stack.push(x);
    } else {
      stack[i] = x;
    }
    res[j++] = i + 1;
  }
  return res;
  function chk(x) {
      if (m && stack[m - 1] <= x) return m;
      let l = 0, r = m - 1;
      while (l < r) {
        let m = (l + r) >> 1;
        if (stack[m] > x) {
          r = m;
        } else {
          l = m + 1;
        }
      }
      return l;
  }
};

