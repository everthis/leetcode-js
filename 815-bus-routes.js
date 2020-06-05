/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
const numBusesToDestination = function (routes, S, T) {
  if (S === T) return 0
  const map = {}
  const visited = new Array(routes.length).fill(false),
    queue = [S]
  let rides = 0
  for (let i = 0; i < routes.length; i++) {
    for (const stop of routes[i]) {
      if (map[stop] === undefined) {
        map[stop] = []
      }
      map[stop].push(i)
    }
  }
  while (queue.length > 0) {
    let size = queue.length
    rides += 1
    while (size > 0) {
      const currStop = queue.shift()
      size -= 1
      for (const bus of map[currStop]) {
        if (visited[bus]) continue
        visited[bus] = true
        for (const stop of routes[bus]) {
          if (stop === T) return rides
          queue.push(stop)
        }
      }
    }
  }
  return -1
}
