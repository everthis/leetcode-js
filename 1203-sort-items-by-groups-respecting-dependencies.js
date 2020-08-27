/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
const sortItems = function (n, m, group, beforeItems) {
  const vertexs = new Map()
  const groupVertexs = new Map()
  let groupNo = m
  for (let i = 0; i < n; i++) {
    vertexs.set(i, {
      neighbors: new Set(),
      indegree: 0,
    })
    if (group[i] === -1) {
      group[i] = groupNo++
    }
    if (!groupVertexs.has(group[i])) {
      groupVertexs.set(group[i], {
        v: new Set(),
        neighbors: new Set(),
        indegree: 0,
      })
    }
    groupVertexs.get(group[i]).v.add(i)
  }

  for (let i = 0; i < n; i++) {
    for (const before of beforeItems[i]) {
      if (!vertexs.get(before).neighbors.has(i)) {
        vertexs.get(i).indegree += 1
      }
      vertexs.get(before).neighbors.add(i)

      const groupOfBefore = group[before]
      if (groupOfBefore === group[i]) continue
      if (!groupVertexs.get(groupOfBefore).neighbors.has(group[i])) {
        groupVertexs.get(group[i]).indegree += 1
      }
      groupVertexs.get(groupOfBefore).neighbors.add(group[i])
    }
  }

  const zeroGroup = []
  for (const group of groupVertexs) {
    if (group[1].indegree === 0) {
      zeroGroup.push(group[0])
    }
  }
  const result = []
  let cntGroup = 0
  let cntV = 0
  const groupTotal = groupVertexs.size

  while (zeroGroup.length) {
    const top = zeroGroup.pop()
    cntGroup += 1
    const v = groupVertexs.get(top).v
    const total = v.size
    const zero = []

    for (const i of v) {
      if (vertexs.get(i).indegree === 0) {
        zero.push(i)
      }
    }
    while (zero.length) {
      const it = zero.pop()
      result.push(it)
      for (const n of vertexs.get(it).neighbors) {
        vertexs.get(n).indegree -= 1
        if (v.has(n) && vertexs.get(n).indegree === 0) {
          zero.push(n)
        }
      }
    }
    if (result.length - cntV !== total) {
      return []
    }
    cntV = result.length

    for (const groupneigbor of groupVertexs.get(top).neighbors) {
      groupVertexs.get(groupneigbor).indegree -= 1
      if (groupVertexs.get(groupneigbor).indegree === 0) {
        zeroGroup.push(groupneigbor)
      }
    }
  }

  return cntGroup === groupTotal ? result : []
}
