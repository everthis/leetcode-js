/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function (tickets) {
  const result = []
  const map = new Map()
  for (const [from, to] of tickets) {
    if (!map.has(from)) {
      map.set(from, [])
    }
    map.get(from).push(to)
  }
  for (const key of map.keys()) {
    map.get(key).sort()
  }
  function dfs(departure) {
    const destination = map.get(departure)
    while (destination && destination.length) {
      const newDeparture = destination.shift()
      dfs(newDeparture)
    }
    result.push(departure)
  }
  dfs('JFK')
  return result.reverse()
}
