/**
 * @param {number[]} A
 * @return {number}
 */
const partitionDisjoint = function(A) {
    let n = A.length;
    let maxLeft = A[0];
    let minRight = new Int32Array(n);
    let min = Infinity;
    for (let i = n - 1; i >= 1; i--) {
        min = Math.min(min, A[i]);
        minRight[i] = min;
   }
   
   for(let i = 1; i < n; i++){
       if (maxLeft <= minRight[i]){
           return i;
       }

       maxLeft = Math.max(maxLeft, A[i]);               
   }
};
