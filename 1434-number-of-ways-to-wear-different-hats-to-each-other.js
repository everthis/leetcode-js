/**
 * @param {number[][]} hats
 * @return {number}
 */
const numberWays = function(hats) {
  const map = new Map()
  const n = hats.length
  for(let i = 0; i < n; i++) {
    for(const h of hats[i]) {
      if(!map.has(h)) map.set(h, [])
      map.get(h).push(i)
    }
  }
  const mod = 1e9 + 7
  const allMask = (1 << n) - 1
  const dp = Array.from({ length: 41 }, () => Array(1024))
  
  return dfs(1, 0)
  
  function dfs(hat, mask) {
    if(mask === allMask) return 1
    if(hat > 40) return 0
    if(dp[hat][mask] != null) return dp[hat][mask]
    
    let res = 0
    
    // not using this `hat`
    res += dfs(hat + 1, mask)
    for(const p of (map.get(hat) || [])) {
      if(((mask >> p) & 1) === 0) {
        res += dfs(hat + 1, mask | (1 << p))
        res = res % mod
      }
    }
    dp[hat][mask] = res
    return res
  }
  
};

// another


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
