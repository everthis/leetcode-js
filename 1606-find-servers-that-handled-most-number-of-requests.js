/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
const busiestServers = function (k, arrival, load) {
  const ark = []
  const map = new Map()
  let max = 0
  for (let i = 0; i < arrival.length; i++) {
    if (i < k) {
      ark[i] = arrival[i] + load[i]
      map.set(i, 1)
      max = Math.max(max, map.get(i))
    } else {
      let server = i % k
      const curr = server
      while (server < k) {
        if (ark[server] <= arrival[i]) {
          ark[server] = arrival[i] + load[i]
          map.set(server, map.has(server) ? map.get(server) + 1 : 1)
          max = Math.max(max, map.get(server))
          break
        }
        server++
      }
      if (server === k) {
        let l = 0
        while (l < curr) {
          if (ark[l] <= arrival[i]) {
            ark[l] = arrival[i] + load[i]
            map.set(l, map.has(l) ? map.get(l) + 1 : 1)
            max = Math.max(max, map.get(l))
            break
          }
          l++
        }
      }
    }
  }

  const result = []
  const entries = map[Symbol.iterator]()
  for (let en of entries) {
    if (en[1] === max) {
      result.push(en[0])
    }
  }
  return result
}
