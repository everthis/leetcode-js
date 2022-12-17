/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
const maxPoints = function (grid, queries) {
  const heap = new MinPriorityQueue({
    compare: ({ value: valueA }, { value: valueB }) => valueA - valueB,
  })

  const enqueue = (r, c) => {
    if (
      0 <= r &&
      r < grid.length &&
      0 <= c &&
      c < grid[0].length &&
      grid[r][c] !== null
    ) {
      heap.enqueue({ row: r, col: c, value: grid[r][c] })
      grid[r][c] = null
    }
  }
  enqueue(0, 0)
  let count = 0
  const map = {}
  const sortedQueries = [...queries].sort((x, y) => x - y)

  for (const query of sortedQueries) {
    while (!heap.isEmpty()) {
      const { row, col, value } = heap.front()
      if (query <= value) break
      heap.dequeue()
      enqueue(row + 1, col)
      enqueue(row - 1, col)
      enqueue(row, col + 1)
      enqueue(row, col - 1)
      ++count
    }

    map[query] = count
  }

  return queries.map((query) => map[query])
}
