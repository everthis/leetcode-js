/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = function(points) {
    const N = points.length
    let ans = 0
    for(let i = 0; i < N; i++) {
        for(let j = i + 1; j < N; j++) {
            for(let k = j + 1; k < N; k++) {
                ans = Math.max(ans, area(points[i], points[j], points[k]))
            }
        }
    }
    return ans
};

function area(P,Q,R) {
    return 0.5 * Math.abs(P[0]*Q[1] + Q[0]*R[1] + R[0]*P[1] -P[1]*Q[0] - Q[1]*R[0] - R[1]*P[0])
}
