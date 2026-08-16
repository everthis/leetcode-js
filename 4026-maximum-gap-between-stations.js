/**
 * @param {string} skill
 * @param {string} station
 * @return {number}
 */
var maximumGap = function(skill, station) {
    let sk = skill, st = station
    let l = 0, m = st.length, res= 0, n = sk.length
    let ll = [], rr = []
    let j = 0
    for(let i = 0; i < n; i++) {
        while(sk[i] !== st[j]) j++
        ll.push(j)
        j++
    }

    j = m - 1
    for(let i = n - 1; i>= 0; i--) {
        while(sk[i] !== st[j]) j--
        rr.push(j)
        j--
    }
    rr.reverse()

    for(let i = 0; i < n - 1; i++) {
        res = Math.max(res, rr[i + 1] -ll[i])
    }


    return res
};
