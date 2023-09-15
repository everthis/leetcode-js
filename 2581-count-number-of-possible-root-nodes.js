/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
const rootCount = function (edges, guesses, k) {
  const lookup = new Set(guesses.map(([a, b]) => a * 1_000_000 + b))
  const adjList = edges.reduce(
    (adjList, [a, b]) => {
      adjList[a].push(b)
      adjList[b].push(a)
      return adjList
    },
    new Array(edges.length + 1).fill(0).map(() => []),
  )

  const guessed = (a, b) => (lookup.has(a * 1_000_000 + b) ? 1 : 0)

  const getCorrect = (node, parent) =>
    adjList[node].reduce(
      (total, child) =>
        child === parent
          ? total
          : total + guessed(node, child) + getCorrect(child, node),
      0,
    )

  const getTotal = (node, parent, correct) =>
    (correct >= k ? 1 : 0) +
    adjList[node].reduce(
      (total, child) =>
        child === parent
          ? total
          : total +
            getTotal(
              child,
              node,
              correct - guessed(node, child) + guessed(child, node),
            ),
      0,
    )

  return getTotal(0, -1, getCorrect(0, -1))
}
