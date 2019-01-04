/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
    let indexAns = 0
    let index = 0
    while(index < chars.length) {
        let currentChar = chars[index]
        let count = 0
        while(index < chars.length && chars[index] === currentChar) {
            index++
            count++
        }
        chars[indexAns++] = currentChar
        if(count !== 1) {
            for(let el of (''+count).split('')) {
                chars[indexAns++] = el
            }
        }
    }
    return indexAns
};
