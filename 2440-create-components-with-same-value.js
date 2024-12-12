/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var componentValue = function(nums, edges) {
  const n = nums.length;
  if(n === 1) return 0;
    const total = nums.reduce((a, b) => a + b, 0);
    const g = Array.from({ length: n }, () => []);
    const indegree = Array(n).fill(0);
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
        indegree[u]++;
        indegree[v]++;
    }
    const sums = []
    for(let s = 1; s * s <= total; s++) {
        if(total % s === 0) {
            sums.push(s);
            sums.push(total / s);
        }
    }
    sums.sort((a, b) => a - b);
    let res = 0
    for(const s of sums) {
      const ind = [...indegree];
        const q = [];
        const visited = Array(n).fill(false);
        const sum = [...nums];
        for(let i = 0; i < n; i++) {
            if(ind[i] === 1) {
                q.push(i);
                visited[i] = true;
            }
        }
        let flag = true;
        while(q.length) {
            const cur = q.shift();
            if(sum[cur] > s) {
                flag = false;
                break;
            } else if(sum[cur] === s) {
                sum[cur] = 0
            }
            for(const next of g[cur]) {
                if(visited[next]) continue;
                sum[next] += sum[cur];
                ind[next]--;
                if(ind[next] === 1) {
                    q.push(next);
                    visited[next] = true;
                }
            }
        }
        if(flag) return total / s - 1;

    }
    return 0
};

// another


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

