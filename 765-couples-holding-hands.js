/**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = function (row) {
  let res = 0,
    N = row.length
  const ptn = new Array(N).fill(0)
  const pos = new Array(N).fill(0)
  for (let i = 0; i < N; i++) {
    ptn[i] = i % 2 === 0 ? i + 1 : i - 1
    pos[row[i]] = i
  }
  for (let i = 0; i < N; i++) {
    for (let j = ptn[pos[ptn[row[i]]]]; i !== j; j = ptn[pos[ptn[row[i]]]]) {
      swap(row, i, j)
      swap(pos, row[i], row[j])
      res++
    }
  }
  return res
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// another

/**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = function (row) {
  const parents = Array.from({ length: row.length / 2 }, (_, i) => i)
  const positions = new Map()
  for (let i = 0; i < row.length / 2; i++) {
    const left = Math.floor(row[i * 2] / 2)
    const right = Math.floor(row[i * 2 + 1] / 2)
    if (positions.has(left)) {
      union(i, positions.get(left))
    } else {
      positions.set(left, i)
    }
    if (positions.has(right)) {
      union(i, positions.get(right))
    } else {
      positions.set(right, i)
    }
  }

  const uniqueRoots = new Set()
  for (const parent of parents) {
    uniqueRoots.add(find(parent))
  }
  return parents.length - uniqueRoots.size

  function union(a, b) {
    const aRoot = find(a)
    const bRoot = find(b)
    parents[aRoot] = bRoot
  }
  function root(x) {
    while (x !== parents[x]) {
      parents[x] = parents[parents[x]]
      x = parents[x]
    }
    return x
  }
  function find(node) {
    return root(node)
  }
}

