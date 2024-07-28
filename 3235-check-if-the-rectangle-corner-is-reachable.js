/**
 * @param {number} X
 * @param {number} Y
 * @param {number[][]} circles
 * @return {boolean}
 */
var canReachCorner = function(X, Y, circles) {
  let width = X, height = Y
  const numCircles = circles.length
  const circleInfo = circles.map((circle) => [circle[0], circle[1], circle[2]])
  const adjacencyList = Array.from({ length: numCircles + 4 }, () => [])

  for (let i = 0; i < numCircles; i++) {
    const [x, y, radius] = circleInfo[i]

    if (x - radius <= 0) {
      adjacencyList[i].push(numCircles)
      adjacencyList[numCircles].push(i)
    }
    if (width - x <= radius) {
      adjacencyList[i].push(numCircles + 2)
      adjacencyList[numCircles + 2].push(i)
    }
    if (y - radius <= 0) {
      adjacencyList[i].push(numCircles + 1)
      adjacencyList[numCircles + 1].push(i)
    }
    if (height - y <= radius) {
      adjacencyList[i].push(numCircles + 3)
      adjacencyList[numCircles + 3].push(i)
    }

    for (let j = i + 1; j < numCircles; j++) {
      const [x2, y2, radius2] = circleInfo[j]
      const dx = x - x2
      const dy = y - y2
      const distanceSquared = dx * dx + dy * dy
      const radiusSum = radius + radius2

      if (distanceSquared <= radiusSum * radiusSum) {
        adjacencyList[i].push(j)
        adjacencyList[j].push(i)
      }
    }
  }

  function bfs(startNode, targetNode1, targetNode2) {
    const queue = [startNode]
    const visited = Array(numCircles + 4).fill(0)
    visited[startNode] = 1

    while (queue.length > 0) {
      const currentNode = queue.shift()
      for (const neighbor of adjacencyList[currentNode]) {
        if (!visited[neighbor]) {
          visited[neighbor] = 1
          queue.push(neighbor)
        }
      }
    }
    return visited[targetNode1] || visited[targetNode2]
  }

  return !(
    bfs(numCircles, numCircles + 1, numCircles + 2) ||
    bfs(numCircles + 3, numCircles + 2, numCircles + 1)
  )
};
