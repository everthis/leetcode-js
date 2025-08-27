/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let res = Infinity

    const n = landStartTime.length
    let minEnd = Infinity
    for (let i = 0; i < n; i++) {
        minEnd = Math.min(minEnd, landStartTime[i] + landDuration[i])
    }
    const m = waterStartTime.length

    for (let i = 0; i < m; i++) {
        res = Math.min(res, waterDuration[i] + Math.max(minEnd, waterStartTime[i]))
    }

    minEnd = Infinity
    for (let i = 0; i < m; i++) {
        minEnd = Math.min(minEnd, waterStartTime[i] + waterDuration[i])
    }

    for (let i = 0; i < n; i++) {
        res = Math.min(res, landDuration[i] + Math.max(minEnd, landStartTime[i]))
    }

    return res
};
