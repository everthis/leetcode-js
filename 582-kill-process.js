/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
const killProcess = function(pid, ppid, kill) {
  const pm = new Map()
  for(let i = 0, len = pid.length; i < len; i++) {
    const c = pid[i]
    const p = ppid[i]
    let tmp = pm.get(p)
    if(!tmp) tmp = new Set()
    tmp.add(c)
    pm.set(p, tmp)
  }
  const res = []
  const q = [kill]
  while(q.length) {
    const size = q.length
    for(let i = 0; i < size; i++) {
      const el = q.shift()
      res.push(el)
      if(pm.get(el)) {
        q.push(...Array.from(pm.get(el)))
      }
    }
  }
  return res
};
