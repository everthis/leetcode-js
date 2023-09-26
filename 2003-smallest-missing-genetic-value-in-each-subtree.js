/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
function smallestMissingValueSubtree(parent, nums) {
  const graph = {},
    n = parent.length
  const res = Array(n).fill(1)
  const visited = new Set()
  let miss = 1
  for (let i = 0; i < n; i++) {
    if (graph[parent[i]] == null) graph[parent[i]] = []
    graph[parent[i]].push(i)
  }
  let idx = -1
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      idx = i
      break
    }
  }

  if (idx === -1) return res
  let cur = idx,
    pre = -1
  while (cur !== -1) {
    const chidlren = graph[cur]
    if (chidlren) {
      for (const child of chidlren) {
        if (child === pre) continue
        dfs(child)
      }
    }
    visited.add(nums[cur])
    while (visited.has(miss)) {
      miss++
    }
    // console.log(cur, miss, visited)
    res[cur] = miss
    pre = cur
    cur = parent[cur]
  }

  return res

  function dfs(node) {
    visited.add(nums[node])
    const chidlren = graph[node]
    if (chidlren) {
      for (const child of chidlren) dfs(child)
    }
  }
}

// another


/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
const smallestMissingValueSubtree = function(parents, nums) {
      let n = parents.length;
      const ans = new Array(n).fill(0);
      const fn = new Array(100010).fill(0);
      const tree = [];
      const nums1 = nums;
      for(let idx=0;idx<n;idx++) {
        tree.push([]);
      }
      for (let idx=1;idx<n;idx++) {
        tree[parents[idx]].push(idx);
      }
      let nodeIdx = 0;
      search(0,0);
      return ans;
  
    function search( root,  rec) {
      let pos = 1;
      for(let next of tree[root]) {
        pos = Math.max(pos, search(next, nodeIdx));
      }
      nodeIdx++;
      fn[nums1[root]] = nodeIdx;
      while(fn[pos]!=0 && fn[pos]>rec && fn[pos]<=nodeIdx) {
        pos++;
      }
      ans[root] = pos;
      return pos;
    }
};

