/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    const freq = {}
    const occur = {}

    for(let i = 0; i < s.length; i++) {
        const c  = s[i]
        if(vowels.has(c)) {
            if(!(c in occur)) {
                occur[c] = i
            }
            freq[c] = (freq[c] || 0) + 1
        }
    }

    let a = Object.entries(freq).map(([letter, count]) => [count, occur[letter], letter])

    a.sort((x, y) => {
        if(y[0] !== x[0]) return y[0] - x[0]
        return x[1] - y[1]
    })

    let res = ''
    let idx = 0

    for(const c of s) {
        if(vowels.has(c)) {
            if(a[idx][0] >= 1) {
                res += a[idx][2]
                a[idx][0] -= 1
            } else {
                idx += 1
                res += a[idx][2]
                a[idx][0] -= 1
            }
        } else {
            res += c
        }
    }

    return res
};
