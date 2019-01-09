/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const shortestSubarray = function(A, K) {
    const N = A.length
    const P = new Array(N+1).fill(0)
    
    for(let i = 0; i < N; i++) {
        P[i+1] = P[i] + A[i]
    }

    let ans = N + 1
    const monoq = []
    for(let y = 0; y < P.length; y++) {
        while(monoq.length > 0 && P[y] <= P[monoq[monoq.length - 1]] ) {
            monoq.pop()
        }
        while(monoq.length > 0 && P[y] >= P[monoq[0]] + K ) {
            ans = Math.min(ans, y - monoq.shift())
        }
        monoq.push(y)
    }

    return ans < N + 1 ? ans : -1
};
