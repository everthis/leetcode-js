/**
 * @param {string[]} chunks
 * @param {string[]} queries
 * @return {number[]}
 */
var countWordOccurrences = function(chunks, queries) {
    let s = ''
    for(const chunk of chunks) s += chunk
    const freq = new Map()
    const n = s.length
    let i = 0

    while(i < n) {
        if(!(s[i] >= 'a' && s[i] <= 'z')) {
            i++
            continue
        }

        const start = i
        let word = ''
        while(i < n) {
            if(s[i] >= 'a' && s[i] <= 'z') {
                word += s[i]
                i++
            } else if(s[i] === '-') {
                if(
                    i > start &&
                    i + 1 < n &&
                    s[i - 1] >= 'a' && s[i - 1] <= 'z' &&
                    s[i + 1] >= 'a' && s[i + 1] <= 'z'
                ) {
                    word += '-'
                    i++
                } else break 
            } else break
        }
        if(word.length > 0) freq.set(word, (freq.get(word) || 0) + 1)
        if(i < n && !((s[i] >= 'a' && s[i] <= 'z') || s[i] === '-')) i++
    }
    


    const res = []

    for(const q of queries) res.push(freq.get(q) || 0)

    return res
};
