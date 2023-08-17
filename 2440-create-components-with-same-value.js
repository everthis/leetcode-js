/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
const componentValue = function(nums, edges) {
   const n = nums.length, sum = nums.reduce((ac, e) => ac + e, 0)
   const graph = {}, degree = Array(n).fill(0)
   const { min } = Math, mi = min(...nums)
   for(const [u, v] of edges) {
     if(graph[u] == null) graph[u] = []
     if(graph[v] == null) graph[v] = []
     graph[u].push(v)
     graph[v].push(u)
     degree[u]++
     degree[v]++
   }
  

   for(let t = mi; t < sum; t++) {
     if((sum % t === 0) && bfs(t)) return sum / t - 1
   }
   
  return 0
   
   
   function bfs(target) {
     const vertices = nums.slice(0), deg = degree.slice(0), q = []
     for(let i = 0; i < n; i++) {
       if(deg[i] === 1) {
         q.push(i)
       }
     }

     while(q.length) {
       const cur = q.shift()
       deg[cur] = 0
       const nxt = graph[cur] || []
       for(const e of nxt) {
         if(vertices[cur] !== target) vertices[e] += vertices[cur]
         deg[e]--
         
         if(deg[e] === 0) return vertices[e] === target
         else if(deg[e] === 1) q.push(e)
       }
     }
     return false
   }
};

