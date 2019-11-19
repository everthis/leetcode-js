/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
  const res = []
  traverse(graph, 0, [0], res)
  return res
};

function traverse(arr, idx, cur, res) {
  if(idx === arr.length - 1) {
    res.push(cur.slice(0))
    return
  }
  for(let i = 0, len = arr[idx].length; i < len; i++) {
    cur.push(arr[idx][i])
    traverse(arr, arr[idx][i], cur, res)
    cur.pop(arr[idx][i])
  }
}
