/**
 * @param {number[][]} occupiedIntervals
 * @param {number} freeStart
 * @param {number} freeEnd
 * @return {number[][]}
 */
var filterOccupiedIntervals = function(occupiedIntervals, freeStart, freeEnd) {
    const arr = occupiedIntervals
    let st = freeStart, en = freeEnd

    if(arr.length === 0) return []
    arr.sort((a, b) => a[0] - b[0])
    const merge = [arr[0]]

    for(let i = 1; i < arr.length; i++) {
        if(arr[i][0] <= merge[merge.length - 1][1] + 1) {
            merge[merge.length - 1][1] = Math.max(arr[i][1], merge[merge.length - 1][1])
        } else {
            merge.push(arr[i])
        }
    }
    
    let res = []


    for(const x of merge) {
        const [l, r] = x
        if(r < st || l > en) {
            res.push(x)
        } else if(l >= st && r <= en) {
            continue
        } else if(l < st && r > en) {
            res.push([l, st - 1])
            res.push([en + 1, r])
        } else if(l < st) {
            res.push([l, st - 1])
        } else {
            res.push([en + 1, r])
        }
    }


    return res
};
