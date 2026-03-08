/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    const n = capacity.length
    let mini = Infinity
    let res = -1

    for(let i = 0; i < n; i++) {
        if(capacity[i] >= itemSize && capacity[i] < mini) {
            mini = capacity[i]
            res = i
        }
    }
    
    return res
};
