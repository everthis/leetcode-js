/**
 * @param {string} s
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var countKConstraintSubstrings = function(s, k, queries) {
    let binaryString = s, maxZerosOnes = k, queriesList = queries
    let length = binaryString.length;
    let zeroPrefixSum = Array(length + 1).fill(0);

    for (let idx = 0; idx < length; idx++) {
        zeroPrefixSum[idx + 1] = (binaryString[idx] === '0' ? 1 : 0) + zeroPrefixSum[idx];
    }

    let endIndex = Array(length).fill(0);

    for (let start = 0; start < length; start++) {
        let end = start;
        let low = start, high = length - 1;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            let zeroCount = zeroPrefixSum[mid + 1] - zeroPrefixSum[start];
            let oneCount = mid + 1 - start - zeroCount;

            if (zeroCount <= maxZerosOnes || oneCount <= maxZerosOnes) {
                end = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        endIndex[start] = end;
    }

    for (let i = 0; i < length; i++) {
        zeroPrefixSum[i + 1] = (endIndex[i] - i + 1) + zeroPrefixSum[i];
    }

    let results = [];

    /* Template by Bharadwaj ( LEETCODE JAVASCRIPT ) */
    /* Youtube : https://youtube.com/@code-with-Bharadwaj */
    /* Portfolio : https://manu-bharadwaj-portfolio.vercel.app/ */

    for (let query of queriesList) {
        let left = query[0];
        let right = query[1];
        let validIndex = left - 1;
        let low = left, high = right;
        let totalCount = 0;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if (endIndex[mid] < right) {
                validIndex = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        totalCount += zeroPrefixSum[validIndex + 1] - zeroPrefixSum[left];
        let difference = right - validIndex;
        totalCount += (difference * (difference + 1)) / 2;
        results.push(totalCount);
    }

    return results;
};
