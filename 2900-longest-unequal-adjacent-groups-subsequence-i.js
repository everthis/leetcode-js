/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
const getWordsInLongestSubsequence = function (n, words, groups) {
    let res = []
    res.push(words[0])

    for(let i = 1; i < n; i++) {
        if(groups[i] !== groups[i - 1]) res.push(words[i])
    }
    return res
}
