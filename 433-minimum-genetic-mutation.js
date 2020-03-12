/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function(start, end, bank) {
  const obj = { res: Number.MAX_VALUE }
  dfs(start, end, bank, 0, obj, new Set())
  return obj.res === Number.MAX_VALUE ? -1 : obj.res
}

function dfs(s, e, bank, num, obj, visited) {
  if(s === e) {
    obj.res = Math.min(obj.res, num)
    return
  }
  for(let el of bank) {
    let diff = 0
    for(let i = 0, len = s.length; i < len; i++) {
      if(s[i] !== el[i]) {
        diff++
        if(diff > 1) break
      }
    }
    if(diff === 1 && !visited.has(el)) {
      visited.add(el)
      dfs(el, e, bank, num + 1, obj, visited)
      visited.delete(el)
    }
  }
} 

// another

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function(start, end, bank) {
  const bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1
  const queue = [[start, 0]]
  const dna = ['A', 'C', 'G', 'T']
  while (queue.length) {
    let [node, count] = queue.shift()
    if (node === end) return count
    for (let i = 0; i < node.length; i++) {
      for (let j = 0; j < dna.length; j++) {
        const d = node.slice(0, i) + dna[j] + node.slice(i + 1)
        if (bankSet.has(d)) {
          queue.push([d, count + 1])
          bankSet.delete(d)
        }
      }
    }
  }
  return -1
}
