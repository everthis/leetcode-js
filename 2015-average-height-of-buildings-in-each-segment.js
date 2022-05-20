/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const averageHeightOfBuildings = function (buildings) {
  const hash = {},
    cnt = {}
  for (const [s, e, h] of buildings) {
    if (hash[s] == null) hash[s] = 0
    if (hash[e] == null) hash[e] = 0
    if (cnt[s] == null) cnt[s] = 0
    if (cnt[e] == null) cnt[e] = 0
    hash[s] += h
    hash[e] -= h
    cnt[s]++
    cnt[e]--
  }

  const res = []
  const keys = Object.keys(hash).map((e) => +e)
  keys.sort((a, b) => a - b)

  let h = 0,
    c = 0
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i],
      hc = cnt[k]
    if (h) res[res.length - 1][1] = k
    h += hash[k]
    c += cnt[k]
    if (
      h &&
      (res.length === 0 ||
        res[res.length - 1][1] !== k ||
        res[res.length - 1][2] !== ~~(h / c))
    )
      res.push([k, k, ~~(h / c)])
  }

  return res
}
