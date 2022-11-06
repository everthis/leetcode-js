/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
const minimumTotalDistance = function(robot, factory) {
  robot.sort((a, b) => a - b)
  factory.sort((a, b) => a[0] - b[0])
  const facs = []
  for(const f of factory) {
    for(let i = 0; i < f[1]; i++) facs.push(f[0])
  }
  const n = facs.length
  let dp = Array(n + 1).fill(0)
  for(let i = 0; i < robot.length; i++) {
    const nxt = Array(n + 1).fill(Infinity)
    for(let j = 0; j < n; j++) {
      nxt[j + 1] = Math.min(nxt[j], dp[j] + Math.abs(robot[i] - facs[j]))
    }
    dp = nxt
  }
  
  
  return dp[n]
};

