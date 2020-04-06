/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
const exclusiveTime = function (n, logs) {
  const res = [...Array(n)].fill(0),
    stack = []
  for (let i = 0; i < logs.length; i++) {
    const log = logs[i].split(':')
    if (log[1] == 'start') {
      stack.push([log[2], 0])
    } else {
      const start = stack.pop()
      const time = log[2] - start[0] + 1
      res[log[0]] += time - start[1]
      if (stack.length > 0) {
        stack[stack.length - 1][1] += time
      }
    }
  }
  return res
}
