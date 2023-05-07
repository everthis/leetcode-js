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
