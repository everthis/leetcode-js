/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    const n = matrix.length
    const res = Array(n).fill(0)

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const e = matrix[i][j]
            if(i !== j) {
                if(e === 1) {
                    res[i]++
                    res[j]++
                }
            }
        }
    }
    for(let i = 0; i < n; i++) {
        res[i] =  res[i] / 2
    }
    return res
};
