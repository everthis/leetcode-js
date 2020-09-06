/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
const countRoutes = function (locations, start, finish, fuel) {
  const n = locations.length
  const mod = 10 ** 9 + 7
  const dp = Array.from({ length: n }, () => Array(fuel + 1).fill(-1))
  return solve(start, finish, fuel)
  function solve(curCity, e, fuel) {
    if (fuel < 0) return 0
    if (dp[curCity][fuel] !== -1) return dp[curCity][fuel]
    let ans = curCity === e ? 1 : 0
    for (let nextCity = 0; nextCity < locations.length; nextCity++) {
      if (nextCity !== curCity) {
        ans +=
          solve(
            nextCity,
            e,
            fuel - Math.abs(locations[curCity] - locations[nextCity])
          ) % mod
      }
    }
    return (dp[curCity][fuel] = ans % mod)
  }
}
