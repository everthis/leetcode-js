/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
const exclusiveTime = function (n, logs) {
  const res = [...Array(n)].fill(0)
  const stack = []
  let pre = 0
  for (let i = 0; i < logs.length; i++) {
    const log = logs[i].split(':')
    if (log[1] === 'start') {
      if(stack.length !== 0) res[stack[stack.length - 1]] += +log[2] - pre
      stack.push(log[0])
      pre = log[2]
    } else {
      res[stack.pop()] += +log[2] - pre + 1
      pre = +log[2] + 1
    }
  }
  return res
}
