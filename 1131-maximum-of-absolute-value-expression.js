/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let n = arr1.length;
    let combs = [
      [1,1],[1,-1],[-1,1],[-1,-1]
    ];
    let result = -Infinity;
    for(let [p,q] of combs) {
      let max = -Infinity, min = Infinity;
      for(let i=0; i < n; i++) {
        let value = (p * arr1[i]) + (q * arr2[i]) + i;
        max = Math.max(max,value);
        min = Math.min(min,value);
      };
      result = Math.max(result, max-min);
    };
    return result;
};

