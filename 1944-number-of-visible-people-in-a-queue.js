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
