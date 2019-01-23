/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
    const res = []
    let dir = 'top'
    while(matrix.length) {
        switch (dir) {
            case 'top':
                res.push(...matrix.shift())
                dir = 'right'
                break;
            case 'right':
                for(let i = 0; i < matrix.length - 1; ) {
                    res.push(matrix[i].pop())
                    if (matrix[i].length === 0) {
                        matrix.splice(i, 1)
                    } else {
                        i++
                    }
                }
                dir = 'bottom'
                break;
            case 'bottom':
                res.push(...matrix.pop().reverse())
                dir = 'left'
                break;
            case 'left':
                for(let i = matrix.length - 1; i >= 0; i--) {
                    res.push(matrix[i].shift())
                    if (matrix[i].length === 0) {
                        matrix.splice(i, 1)
                    }
                }
                dir = 'top'
                break;
        }
    }
    return res
};
