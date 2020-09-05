/**
 * @param {number[][]} hats
 * @return {number}
 */
const numberWays = function (hats) {
  const pplThatCanWearHats = new Array(40 + 1).fill(null).map(() => [])
  for (let i = 0; i < hats.length; i++) {
    const personMask = 1 << i
    for (let hat of hats[i]) {
      pplThatCanWearHats[hat].push(personMask)
    }
  }

  const cache = {}
  const dfs = (hat, pplWithoutHatsMask) => {
    if (!pplWithoutHatsMask) return 1
    if (hat === 41) return 0
    const key = `${hat}-${pplWithoutHatsMask}`
    if (cache.hasOwnProperty(key)) return cache[key]
    const nextHat = hat + 1
    let total = dfs(nextHat, pplWithoutHatsMask)
    for (let personMask of pplThatCanWearHats[hat]) {
      if (!(pplWithoutHatsMask & personMask)) continue
      total += dfs(nextHat, pplWithoutHatsMask ^ personMask)
    }
    return (cache[key] = total % 1000000007)
  }
  return dfs(1, (1 << hats.length) - 1)
}
