/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const minSwap = function(A, B) {
    let swapRecord = 1, fixRecord = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] >= B[i] || B[i - 1] >= A[i]) {
            // In this case, the ith manipulation should be same as the i-1th manipulation
            // fixRecord = fixRecord;
            swapRecord++;
        } else if (A[i - 1] >= A[i] || B[i - 1] >= B[i]) {
            // In this case, the ith manipulation should be the opposite of the i-1th manipulation
            let temp = swapRecord;
            swapRecord = fixRecord + 1;
            fixRecord = temp;
        } else {
            // Either swap or fix is OK. Let's keep the minimum one
            let min = Math.min(swapRecord, fixRecord);
            swapRecord = min + 1;
            fixRecord = min;
        }
    }
    return Math.min(swapRecord, fixRecord);
};
