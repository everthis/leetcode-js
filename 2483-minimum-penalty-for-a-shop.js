/**
 * @param {string} customers
 * @return {number}
 */
const bestClosingTime = function (customers) {
    const n = customers.length, {min} = Math
    let penalty = n, idx = -1, ma = 0
    for(let i = 0, save = 0; i < n; i++) {
        const ch = customers[i]
        if(ch === 'Y') save++
        else save--

        if(save > ma) {
            idx = i
            ma = save
        }
    }

    return idx + 1
}
