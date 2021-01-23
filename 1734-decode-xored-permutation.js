/**
 * @param {number[]} encoded
 * @return {number[]}
 */
const decode = function(A) {
    let i;
    let n = A.length + 1;
    let f = 0;
    const res = [];
    for(i=1;i<n+1;i++){
      f ^= i;
    }
    for(i=1;i<n-1;i+=2){
      f ^= A[i];
    }
    res.push(f);
    for(i=1;i<n;i++){
      f ^= A[i-1];
      res.push(f);
    }
    return res;    
};
