/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
    const str = paragraph.toLowerCase()
    const arr = str.replace(/\W+/g, ' ').trim().split(' ')
    const hash = {}
    for(let el of arr) {
        if(banned.indexOf(el) !== -1) {

        } else {
           if(hash.hasOwnProperty(el)) {
              hash[el] += 1
           } else {
               hash[el] = 1
           }
        }
    }
    const res = Object.entries(hash).sort((a, b) => b[1] - a[1])
    return res[0][0]
};
