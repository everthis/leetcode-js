/**
 * @param {string[]} words
 * @return {number}
 */
var minimumGroups = function(words) {
  let res = 0
    const v = []

    for(const w of words) {
        let e = '', o = ''
        for(let i = 0; i < w.length; i++) {
            if(i & 1) o += w[i]
            else e += w[i]
        }
        v.push(shift(e) + '#' + shift(o))
    }

    v.sort()

    for(let i = 0; i < v.length; i++) {
        if(i === 0 || v[i] !== v[i - 1]) res++
    }

    return res


    function shift(s) {
        const n = s.length
        if(n<=1) return s
        let i = 0; j = 1, k = 0


        while(i < n && j < n && k < n) {
            const a = s[(i + k) % n]
            const b = s[(j + k) % n]

            if(a === b) {
                k++
            } else if(a > b) {
                i = i + k + 1
                if(i === j) i++
                k = 0
            } else {
                j = j + k + 1
                if(i === j) j ++
                k = 0
            }
        }

        const st = Math.min(i, j)
        return s.slice(st) + s.slice(0, st)
    }
};
