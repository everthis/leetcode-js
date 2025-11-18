/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function (edges, online, k) {
  const n = online.length
  let adj_list
  let in_degree
  let max_edge_length
  let topo_sort

  if (edges.length === 0) {
    return -1
  }

  ;[adj_list, in_degree, max_edge_length] = create_adj_list()
  topo_sort = find_toposort_order()
  const res = binary_search(max_edge_length)
  return res


  function create_adj_list() {
    const in_degree_original = new Array(n).fill(0)
    let max_len = 0
    const adj = Array.from({ length: n }, () => [])

    for (const [u, v, cost] of edges) {
      if (online[u] && online[v]) {
        in_degree_original[v] += 1
        max_len = Math.max(max_len, cost)
        adj[u].push([v, cost])
      }
    }
    return [adj, in_degree_original, max_len]
  }

  function find_toposort_order() {
    const dq = []
    const local_topo_sort = []

    for (let node = 0; node < n; node++) {
      if (in_degree[node] === 0) {
        dq.push(node)
      }
    }

    while (dq.length > 0) {
      const node = dq.shift()
      local_topo_sort.push(node)

      for (const [adj, cost] of adj_list[node]) {
        in_degree[adj] -= 1
        if (in_degree[adj] === 0) {
          dq.push(adj)
        }
      }
    }

    return local_topo_sort
  }

  function check_feasibility_with_wt(min_edge_wt) {
    const distances = new Array(n).fill(Infinity)
    distances[0] = 0

    for (const node of topo_sort) {
      for (const [adj, cost] of adj_list[node]) {
        if (cost < min_edge_wt) {
          continue
        }

        if (distances[node] + cost <= k) {
          distances[adj] = Math.min(distances[adj], distances[node] + cost)
        }
      }
    }

    if (distances[n - 1] <= k) {
      return true
    } else {
      return false
    }
  }

  function binary_search(max_edge_length_param) {
    let low = 0
    let high = Math.min(k, max_edge_length_param)

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2)

      if (check_feasibility_with_wt(mid) === true) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }

    return low - 1
  }
}
