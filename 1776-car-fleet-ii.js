/**
 * @param {number[][]} cars
 * @return {number[]}
 */
const getCollisionTimes = function(cars) {
  const n = cars.length;
  const stack = [];
  const res = Array(n)
  for(let i = n - 1; i >= 0; i--) {
    const [p, s] = cars[i]
    res[i] = -1
    while(stack.length) {
      const j = stack[stack.length - 1]
      const [p2, s2] = cars[j]
      if(s2 >= s || res[j] > 0 && (p2 - p) / (s - s2) >= res[j]) stack.pop()
      else break
    }
    if(stack.length) {
      const j = stack[stack.length - 1]
      const [p2, s2] = cars[j]
      res[i] = (p2 - p) / (s - s2)
    }
    stack.push(i)
  }
  
  return res
};

// another


/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function(cars) {
  //这道题必须想清楚一点，那就是如果ans[i]有正值，那么一定是cars[i]和某个cars[j]（j>i且speed[j]<speed[i]）
  //相撞之后，所谓的融合，其实可以理解为cars[i]消失了，cars[j]状态不变
  //所以我们只关注一辆车后面，不关注其前面，它的前面对它没有任何影响。可以考虑从后往前遍历
  const n = cars.length
  const ans = Array(n).fill(0)
  //设立一个类似单调栈的栈，栈底最慢，栈顶最快
  const stack = []
  for(let i = n - 1; i >= 0; i--) {
    while(stack.length) {
      //如果栈顶比我快，我追不上它，可以考虑等它消失之后我去撞它前面的，所以将它pop
      if(cars[stack[stack.length - 1]][1] >= cars[i][1]) stack.pop()
      //如果栈顶比我慢，我就决定去碰它了
      else {
        //如果它不会消失，那我肯定能碰它，break
        if(ans[stack[stack.length - 1]] < 0) break
        //如果它会消失，我需要计算一下在它消失之前能否追上它
        const d = ans[stack[stack.length - 1]] * (cars[i][1] - cars[stack[stack.length - 1]][1])
        //能追上，那我肯定碰它，break
        if(d > cars[stack[stack.length - 1]][0] - cars[i][0]) break
        //追不上，那算了，追它前面的车
        else stack.pop()
      }
    }
    if(stack.length === 0) ans[i] = -1
    else {
      //相对距离除以相对速度
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
