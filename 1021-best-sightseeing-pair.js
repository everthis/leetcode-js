/**
 * @param {number[]} A
 * @return {number}
 */
const maxScoreSightseeingPair = function(A) {
    let res = 0, cur = 0;
    for (let a of A) {
        res = Math.max(res, cur + a);
        cur = Math.max(cur, a) - 1;
    }
    return res;
};


// another

/**
 * @param {number[]} A
 * @return {number}
 */
const maxScoreSightseeingPair = function(A) {
    let ans =A[0];
    let prevBestIdx =0;
    for(let j=1;j<A.length;j++){
        ans = Math.max(ans, A[prevBestIdx]+prevBestIdx+A[j]-j);
        if(A[prevBestIdx ]+prevBestIdx <A[j]+j){
            prevBestIdx =j;
        }
    }
    return ans;
};
