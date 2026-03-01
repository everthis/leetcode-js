/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    const length = s.length
    const vowels = ['a', 'e', 'i', 'o', 'u']
    s = s.split('').reverse().join('')

    for(let i = 0; i < length; i++) {
        if(vowels.includes(s[i])) {
            
        } else {
            return s.slice(i).split('').reverse().join('')
        }
    }

    return ''
};
