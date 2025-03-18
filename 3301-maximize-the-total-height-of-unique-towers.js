/**
 * @param {number[]} maximumHeight
 * @return {number}
 */
var maximumTotalSum = function(maximumHeight) {
    const n = maximumHeight.length;
    maximumHeight.sort((a, b) => a - b);
    
    let sum = 0;
    let lastAssignedHeight = Number.MAX_SAFE_INTEGER;
    
    for (let i = n - 1; i >= 0; i--) {
        const currentHeight = Math.min(maximumHeight[i], lastAssignedHeight - 1);
        
        if (currentHeight < 1) {
            return -1;
        }
        
        sum += currentHeight;
        lastAssignedHeight = currentHeight;
    }
    
    return sum;  
};
