/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function(n, headID, manager, informTime) {
  const hash = {}
  const len = manager.length
  for(let i = 0; i < len; i++) {
    const m = manager[i]
    if(hash[m] == null) hash[m] = new Set()
    hash[m].add(i)
  }
  let res = 0
  let q = [[headID, 0]]
  while(q.length) {
    const tmp = []
    let t = 0
    const size = q.length
    for(let i = 0; i < size; i++) {
      const [cur, time] = q[i]
      if(hash[cur]) {
        for(const e of hash[cur]) {
          res = Math.max(res, time + informTime[cur])
          tmp.push([e, time + informTime[cur]])
        }
      }
    }
    q = tmp
    res += t
  }
  return res
};
