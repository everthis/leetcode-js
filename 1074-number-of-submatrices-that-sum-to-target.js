/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
const numSubmatrixSumTarget = function(matrix, target) {
    let a = matrix
    let n = a.length, m = a[0].length;
    const cum = Array.from({length: n + 1}, () => new Array(m + 1).fill(0));
    for(let i = 0;i < n;i++){
      for(let j = 0;j < m;j++){
        cum[i+1][j+1] = cum[i+1][j] + cum[i][j+1] - cum[i][j] + a[i][j];
      }
    }

    let ans = 0;
    for(let i = 0;i < n;i++){
      for(let j = i;j < n;j++){
        let map = new Map();
        for(let k = 0;k <= m;k++){
          let v = cum[j+1][k] - cum[i][k];
          if(map.has(v - target)){
            ans += map.get(v-target);
          }
          if(map.has(v)){
            map.set(v, map.get(v)+1);
          }else{
            map.set(v, 1);
          }
        }
      }
    }
    return ans;
};
