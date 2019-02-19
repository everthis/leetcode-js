/**
 * @param {number[]} A
 * @return {number}
 */
const maxRotateFunction = function(A) {
    if(A.length === 0) return 0;
    let sum = 0, iteration = 0, len = A.length;
    for(let i = 0; i < len; i++){
        sum += A[i];
        iteration += (A[i] * i);
    }
    let max = iteration;
    for(let j = 1; j < len; j++){
        // for next iteration lets remove one entry value
        // of each entry and the prev 0 * k
        iteration = iteration - sum + A[j-1]*len;
        max = Math.max(max, iteration);
    }
    return max;
};
