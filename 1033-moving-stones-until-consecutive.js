/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const numMovesStones = function(a, b, c) {
    let min = 0
    let min2 = 0
    let max = 0
    const arr= [a,b,c]
    arr.sort((a,b) => a - b)
    
    max = arr[2]-arr[1]-1 + arr[1] - arr[0] - 1
    min = (arr[2] - arr[1] > 1 ? 1 : 0) +(arr[1] - arr[0] > 1 ? 1 : 0)
    min2 = arr[2] - arr[1] === 2 || arr[1] - arr[0] === 2 ? 1 : Number.MAX_VALUE
  
    return [Math.min(min, min2), max]
};
