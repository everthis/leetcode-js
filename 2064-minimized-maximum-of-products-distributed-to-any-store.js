/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
     let MAX = 0;
    for (let x of quantities) MAX = Math.max(x, MAX);
    let l = 1, r = MAX;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (valid(quantities, mid) <= n) r = mid;
        else l = mid + 1;
    }
    return l; 
};



  function valid(quantities,  max) {
      let cnt = 0;
      for (let x of quantities) cnt += Math.floor(x / max) + ((x % max) ? 1 : 0);
      return cnt;
  }
