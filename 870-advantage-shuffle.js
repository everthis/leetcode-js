/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function advantageCount(aArr, B) {
    const A = aArr.sort((a, b) => a - b)
    const n = A.length
    const res = []
    let pq = []
    for(let i = 0; i < n; i++) {
        pq.push([B[i], i])
    }
    pq.sort((a, b) => b[0] - a[0])
    let lo = 0
    let hi = n - 1
    while(pq.length > 0) {
        let cur = pq.shift()
        let idx = cur[1]
        let val = cur[0]
        if (A[hi] > val) {
            res[idx] = A[hi--]
        } else {
            res[idx] = A[lo++]
        }
    }
    return res
}
