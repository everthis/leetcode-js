/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
const minProcessingTime = function (processorTime, tasks) {
    const n = processorTime.length
    processorTime.sort((a, b) => a - b)
    tasks.sort((a, b) => b - a)
    let res = 0
    for(let i = 0, j = 0; i < n; i++, j += 4) {
        res = Math.max(res, processorTime[i] + tasks[j])
    }
    return res
}
