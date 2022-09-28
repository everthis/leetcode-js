/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
const findSmallestRegion = function (regions, region1, region2) {
  const hash = {}
  for(const arr of regions) {
    const p = arr[0]
    const size = arr.length
    for(let i = 1; i < size; i++) {
      const e = arr[i]
      if(hash[e] == null) hash[e] = []
      hash[e].push(p)
    }
  }

  const path1 = [region1], path2 = [region2]
  traverse(region1, path1)
  traverse(region2, path2)

  let i = path1.length - 1, j = path2.length - 1
  while(i >= 0 && j >= 0) {
    if(path1[i] !== path2[j]) break
    else {
      i--
      j--
    }
  }

  return path1[i + 1]

  function traverse(node, res) {
    if(hash[node] == null) return
    res.push(hash[node][0])
    traverse(hash[node][0], res)
  }

}
