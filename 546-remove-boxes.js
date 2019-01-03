/**
 * @param {number[]} boxes
 * @return {number}
 */
const removeBoxes = function(boxes) {
    const n = boxes.length
    const dp = Array.from(new Array(n), () => {
        return Array.from(new Array(n), () => {
            return new Array(n).fill(0)
        })
    })
    return removeBoxesSub(boxes, 0, n - 1, 0, dp)
};

function removeBoxesSub(boxes, i, j, k, dp) {
    if(i > j) return 0;
    if(dp[i][j][k] > 0) return dp[i][j][k]
    for(; i + 1 <= j && boxes[i+1] === boxes[i] ; i++, k++) {
        // optimization: all boxes of the same color counted continuously from the first box should be grouped together
    }
    let res = (k+1) * (k+1) + removeBoxesSub(boxes, i + 1, j, 0, dp)
    for(let m = i + 1; m <= j; m++) {
        if(boxes[i] === boxes[m]) {
            res = Math.max(res, removeBoxesSub(boxes, i + 1, m - 1, 0, dp) + removeBoxesSub(boxes, m, j, k + 1, dp) )
        }
    }
    dp[i][j][k] = res
    return res
}
