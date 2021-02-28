/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function(cars) {
  const n = cars.length
  const ans = Array(n).fill(0)
  const stack = []
  for(let i = n - 1; i >= 0; i--) {
    while(stack.length) {
      if(cars[stack[stack.length - 1]][1] >= cars[i][1]) stack.pop()
      else {
        if(ans[stack[stack.length - 1]] < 0) break
        const d = ans[stack[stack.length - 1]] * (cars[i][1] - cars[stack[stack.length - 1]][1])
        if(d > cars[stack[stack.length - 1]][0] - cars[i][0]) break
        else stack.pop()
      }
    }
    if(stack.length === 0) ans[i] = -1
    else {
      const t = (cars[stack[stack.length - 1]][0]-cars[i][0])/(cars[i][1]-cars[stack[stack.length - 1]][1])
      ans[i] = t
    }
    stack.push(i)
  }
  return ans
};

// another

/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
  let n = cars.length,
    t = 0,
    i
  const ans = Array(n)
  for (let i = 0; i < n; i++) ans[i] = -1
  const s = []
  s[++t] = n - 1
  for (let i = n - 2; ~i; i--) {
    while (t && cars[s[t]][1] >= cars[i][1]) t--
    while (
      t > 1 &&
      (cars[s[t]][0] - cars[i][0]) * (cars[i][1] - cars[s[t - 1]][1]) >
        (cars[s[t - 1]][0] - cars[i][0]) * (cars[i][1] - cars[s[t]][1])
    )
      t--
    if (t) ans[i] = (cars[s[t]][0] - cars[i][0]) / (cars[i][1] - cars[s[t]][1])
    s[++t] = i
  }
  return ans
}
