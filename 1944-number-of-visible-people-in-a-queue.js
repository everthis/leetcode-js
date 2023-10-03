/**
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = function(heights) {
  const n = heights.length
  const res = Array(n).fill(0)
  const stk = []
  for(let i = n - 1; i >= 0; i--) {
    const cur = heights[i]
    let del = 0
    while(stk.length && cur > heights[stk.at(-1)]) {
      del++
      stk.pop()
    }
    res[i] = del + (stk.length ? 1 : 0)
    stk.push(i)
  }
  
  return res
};

// another

/**
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = function(heights) {
  const res = []
  if(heights.length === 0) return res
  
  const n = heights.length
  const stk = []
  for(let i = n - 1; i >= 0; i--) {
    let del = 0
    while(stk.length && heights[i] > heights[stk[stk.length - 1]]) {
      stk.pop()
      del++
    }
    res.push(del + (stk.length ? 1 : 0))
    stk.push(i)
  }
  
  return res.reverse()
};

// another


/**
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = function(heights) {
    const ans = new Uint32Array(heights.length);
    
    const stack = [];
    for (let i = heights.length - 1; i >= 0; i--) {
        const h = heights[i];
        
        let del = 0;
        while (stack.length && stack[stack.length - 1] <= h) {
            del++;
            stack.pop();
        }
        
        ans[i] = del + (stack.length ? 1 : 0);
        stack.push(h);
    }

    return ans;
};

// another

/**
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = function(heights) {
  const stack = [], n = heights.length, res = Array(n)
  for(let i = n - 1; i >= 0; i--) {
    const h = heights[i]
    let del = 0
    while(stack.length && stack[stack.length - 1] <= h) {
      stack.pop()
      del++
    }
    res[i] = stack.length ? del + 1 : del
    stack.push(h)
  }

  return res
};
