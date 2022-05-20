/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const averageHeightOfBuildings = function(buildings) {
  const hash = {}, cnt = {}
  for(const [s, e, h] of buildings) {
    if(hash[s] == null) hash[s] = 0
    if(hash[e] == null) hash[e] = 0
    if(cnt[s] == null) cnt[s] = 0
    if(cnt[e] == null) cnt[e] = 0
    hash[s] += h
    hash[e] -= h
    cnt[s]++
    cnt[e]--
  }
  
  const res = []
  const keys = Object.keys(hash).map(e => +e)
  keys.sort((a, b) => a - b)
  let h = 0, c = 0
  for(const k of keys) {
    if(h) res[res.length - 1][1] = k
    h += hash[k]
    c += cnt[k]
    const avg = ~~(h / c)
    if(h && (
      res.length === 0 ||
      res[res.length - 1][1] !== k ||
      res[res.length - 1][2] !== avg
    )) {
      res.push([k, k, avg])   
    }
  }
  return res
};
