/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function(s, wordDict) {
    return backTrack(s, wordDict, {})
};

function backTrack(s, wordDict, mem) {
    if(mem.hasOwnProperty(s)) return mem[s]
    const result = []
    for(let word of wordDict) {
        if(s.startsWith(word)) {
           let next = s.slice(word.length)
           if(next.length === 0) result.push(word)
           else {
               for(let sub of backTrack(next, wordDict, mem)) {
                   result.push(word+ ' '+sub)
               }
           }
        }
    }
    mem[s] = result
    return result
}
