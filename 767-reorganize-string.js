/**
 * @param {string} S
 * @return {string}
 */
function reorganizeString(S) {
    const map = {}
    const cArr = S.split('')
    for(let c of cArr) {
        let count = (map[c] || 0 ) + 1
        // impossible to form a solution
        if(count > (S.length + 1) / 2 ) {
            return ''
        }
        map[c] = count
    }

    const pq = []
    for(let c of Object.keys(map)) {
        pq.push([c, map[c]])
    }
    pq.sort((a, b) => b[1] - a[1])

    // build the result
    let sb = ''
    while(pq.length > 0) {
        let first = pq.shift()
        if (sb.length === 0 || first[0] !== sb.charAt(sb.length - 1)) {
            sb += first[0]
            if (--first[1] > 0) {
                pq.push(first)
            }
        } else {
            let second = pq.shift()
            sb += second[0]
            if (--second[1] > 0) {
                pq.push(second)
            }
            pq.push(first)
        }
        pq.sort((a, b) => b[1] - a[1])
    }

    return sb
}
