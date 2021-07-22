/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = function(commands, obstacles) {
  const dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]] // east, south, west, north
  const set = new Set()
  obstacles.forEach(([x, y]) => set.add(`${x},${y}`))
  let idx = 3, x = 0, y = 0, res = 0
  for(let e of commands) {
    if(e === -2) idx = (3 + idx) % 4
    else if(e === -1) idx = (1 + idx) % 4
    else {
      const [dx, dy] = dirs[idx]
      let dis = 0
      while(dis < e) {
        const nx = x + dx, ny = y + dy
        const k = `${nx},${ny}`
        if(set.has(k)) break
        x = nx
        y = ny
        dis++
        res = Math.max(res, x * x + y * y)
      }
    }
  }
  
  return res
};
