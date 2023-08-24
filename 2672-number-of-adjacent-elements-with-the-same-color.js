/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
const colorTheArray = function(n, queries) {
   let res = []
   const arr = Array(n).fill(0)
   const [idx, val] = queries[0]
   arr[idx] = val
   res.push(0)
  const len = queries.length
  for(let i = 1; i < len; i++) {
    helper(queries[i])
  }
  
  return res
  
  function helper([idx, val]) {
    const pre = res[res.length - 1]
    let cur = pre
    if(arr[idx] !== val) {
      if(arr[idx] !== 0) {
        if(idx > 0 && arr[idx - 1] === val) cur++
        if(idx + 1 < n && arr[idx + 1] === val) cur++
        if(idx > 0 && arr[idx - 1] === arr[idx]) {
          cur--
        }
        if(idx + 1 < n && arr[idx + 1] === arr[idx]) {
          cur--
        }
      } else {
        // not set
        if(idx > 0 && arr[idx - 1] === val) cur++
        if(idx + 1 < n && arr[idx + 1] === val) cur++
      }
    }
    arr[idx] = val
    
    res.push(cur)
  }
};

// another

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    let color = {};
    let ans = [];
    let cnt = 0;
    for (const q of queries) {
        if (get(color, q[0])!=q[1]) {
            if (get(color, q[0])!=0){
                if (get(color, q[0]-1) == get(color, q[0])) --cnt;
                if (get(color, q[0]+1) == get(color, q[0])) --cnt;
            }
            color[q[0]]=q[1];
            if (get(color, q[0]-1) == color[q[0]]) ++cnt;
            if (get(color, q[0]+1) == color[q[0]]) ++cnt;
        }
        ans.push(cnt);
    }
    return ans;

   function get(hash, key) {
     return hash[key] == null ? 0 : hash[key]
   }
};
