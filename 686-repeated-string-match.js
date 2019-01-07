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
