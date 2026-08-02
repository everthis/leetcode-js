/**
 * @param {number[]} tasks
 * @param {number[]} shifts
 * @return {number[]}
 */
var countTasks = function(tasks, shifts) {
    const n = tasks.length
    const prefix = Array(n + 1).fill(0n)
    const big = BigInt
    
    const res = []

    for(let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + big(tasks[i])
    }

    const totalWork = prefix[n]
    let workDone = 0n

    for(let s of shifts) {
        workDone += big(s)
        if(workDone >= totalWork) {
            workDone = 0n
            res.push(0)
        } else {
            const finished = upperBound(prefix, workDone) - 1
            res.push(n - finished)
        }
    }
    
    return res


    function upperBound(arr, target) {
        let low = 0, high = arr.length

        while(low < high) {
            const mid = Math.floor((low + high) / 2)
            if(arr[mid] <= target) low = mid + 1
            else high = mid
        }

        return low
    }
    
};
