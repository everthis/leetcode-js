/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
const maximizeSquareArea = function (m, n, hFences, vFences) {
  hFences.sort((a, b) => a - b)
  vFences.sort((a, b) => a - b)
  const hSet = new Set(),
    vSet = new Set()

  const mod = 10 ** 9 + 7

  hFences.unshift(1)
  hFences.push(m)
  vFences.unshift(1)
  vFences.push(n)
  for (let i = 0; i < vFences.length; i++) {
    for (let j = i + 1; j < vFences.length; j++) {
      vSet.add(vFences[j] - vFences[i])
    }
  }
  for (let i = 0; i < hFences.length; i++) {
    for (let j = i + 1; j < hFences.length; j++) {
      hSet.add(hFences[j] - hFences[i])
    }
  }

  let max = -1
  for (const v of vSet) {
    if (hSet.has(v)) {
      max = Math.max(max, v)
    }
  }
  if (max === -1) return -1

  return Number((BigInt(max) * BigInt(max)) % BigInt(mod))
}
