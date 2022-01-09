/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
        const set = new Set();
    for (let startWord of startWords) {
        const chars = startWord.split('');
        chars.sort();
        set.add(chars.join(''));
    }
    let res = 0;
    for (let targetWord of targetWords) {
        let chars = targetWord.split('');
        chars.sort()  

        let word = chars.join('');
        for (let i = 0; i < chars.length; i++) {
            let subWord = word.substring(0, i) + word.substring(i + 1, chars.length);
            if (set.has(subWord)) {
                res++;
                break;
            }
        }
    }
    return res;
};
