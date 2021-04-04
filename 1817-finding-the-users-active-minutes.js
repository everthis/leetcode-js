/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function(logs, k) {
  const hash = {}, map = {}
  logs.forEach(l => {
    const [id, mi] = l
    if(hash[mi] == null) hash[mi] = new Set()
    if(map[id] == null) map[id] = new Set()
    hash[mi].add(id)
    map[id].add(mi)
  })

  const res = Array(k).fill(0)
  Object.keys(map).forEach(k => {
     const num = map[k].size
     res[num - 1]++
  })
  
  return res
  
};
