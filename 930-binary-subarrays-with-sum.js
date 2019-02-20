/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
const numSubarraysWithSum = function(A, S) {
    if(A === null || A.length == 0) return 0;
    const freq = new Array(A.length + 1).fill(0)
    let ans = 0;
    let sum = 0;
    for(let i = 0; i < A.length; i++) {
        sum += A[i];
        let index = sum - S;
        if(index >= 0) ans += freq[index];
        if(sum == S) ans++;
        freq[sum]++;
    }
    return ans;
};
