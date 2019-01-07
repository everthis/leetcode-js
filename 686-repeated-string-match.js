/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = function(A, B) {
    let count = Math.ceil(B.length / A.length);
    let testString = A.repeat(count)
    
    return testString.includes(B) ? count : (testString + A).includes(B) ? count + 1 : -1
};
// Form a string of length N from each index in A. 
// If any of these string equals B, then B is a substring of A.
// const repeatedStringMatch = function(A, B) {
//     for (let i = 0; i < A.length; i++) {
//         if (A.charAt(i) === B.charAt(0)) {
//             let count = 1;
//             let j = 0;
//             let startIx = i;
//             while (j < B.length && A.charAt(startIx) === B.charAt(j)) {
//                 j++;
//                 startIx++;
//                 if (startIx >= A.length && j < B.length) {
//                     startIx = startIx % A.length;
//                     count++;
//                 }
//             }
//             if (j == B.length) return count;
//         }
//     }
//     return -1;
// };
