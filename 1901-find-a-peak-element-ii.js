/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findPeakGrid = function(mat) {
    let lowCol = 0;
    let highCol = mat[0].length - 1;

    while(lowCol <= highCol) {
        let midCol = lowCol + ~~((highCol - lowCol) / 2);
        let maxRow = 0;
        for(let i = 0; i < mat.length; i++) {
            maxRow = mat[i][midCol] > mat[maxRow][midCol] ? i : maxRow;
        }

        let isLeftElementBig = midCol - 1 >= lowCol && mat[maxRow][midCol - 1] > mat[maxRow][midCol];
        let isRightElementBig = midCol + 1 <= highCol && mat[maxRow][midCol + 1] > mat[maxRow][midCol];

        if(!isLeftElementBig && !isRightElementBig) {
            return [maxRow, midCol];
        } else if(isRightElementBig) {
            lowCol = midCol + 1;
        } else {
            highCol = midCol - 1;
        }
    }
    return null;
};
