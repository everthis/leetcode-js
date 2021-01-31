/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
const restoreArray = function(pairs) {
  const m = {}
  for(let e of pairs) {
    const [k, v] = e
    if(m[k] == null) m[k] = new Set()
    if(m[v] == null) m[v] = new Set()
    m[k].add(v)
    m[v].add(k)
  }
  const q = [pairs[0]]
  let res = pairs[0]
  m[res[0]].delete(res[1])
  m[res[1]].delete(res[0])
  let n = pairs.length
  while(n) {
    const front = res[0], rear = res[res.length - 1]
    
    if(m[front]) {
        const newf = [...m[front].values()][0]
        if(m[front].size) res.unshift(newf)
        if(m[front]) m[front].delete(newf)
        if(m[newf]) m[newf].delete(front)
        if(m[front].size === 0) delete m[front]
    }
     
    if(m[rear]) {
       const newr = [...m[rear].values()][0]
       if(m[rear].size) res.push(newr)
       if(m[rear]) m[rear].delete(newr)
       if(m[newr]) m[newr].delete(rear)
       if(m[rear].size === 0) delete m[rear]
    }
    n--
  }
    
  return res
};
