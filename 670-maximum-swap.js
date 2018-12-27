/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function(num) {
    const arr = ('' + num).split('')
    for(let i = 0; i < arr.length - 1; i++) {
        let cur = +arr[i]
        let nextMax = Math.max(...arr.slice(i+1).map(el => +el))
        if (nextMax > cur) {
            let idx = arr.lastIndexOf(''+nextMax)
            arr[i] = nextMax
            arr[idx] = cur
            break
        }
    }
    return +(arr.join(''))
};
