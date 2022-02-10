
/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
const peopleIndexes = function(favoriteCompanies) {
  const fcs = []
  for(const fc of favoriteCompanies) fcs.push(new Set(fc))
  const n = fcs.length, uf = new Array(n).fill(0)
  for(let i = 0; i < n; i++) uf[i] = i
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      const a = find(uf, i), b = find(uf, j)
      if(a === b) continue
      else if(contains(fcs[a], fcs[b])) uf[b] = a
      else if(contains(fcs[b], fcs[a])) uf[a] = b
    }
  }
  const set = new Set()
  for(const i of uf) set.add(find(uf, i))
  return Array.from(set).sort((a, b) => a - b)

  function contains(a, b) {
    if(a.size < b.size) return false
    for(let e of b) {
      if(!a.has(e)) return false
    }    
    return true
  }

  function find(uf, e) {
    while(uf[e] !== e) {
      uf[e] = uf[uf[e]]
      e = uf[e]
    }
    return e
  }
};
