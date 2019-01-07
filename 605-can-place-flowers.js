/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    let count = 0
    const clone = flowerbed
    for(let i = 0; i < clone.length; i++) {
      if(clone[i] === 0) {
        if(i === 0 && (clone[i + 1] === 0 || clone[i+1] == null)){
          count++
          clone[i] = 1
        }
        if(i > 0 && i < clone.length - 1 && clone[i - 1] === 0 && clone[i + 1] === 0) {
          count++
          clone[i] = 1
        }
        if(i === clone.length - 1 && clone[i - 1] === 0 && clone[i] === 0) {
           count++
          clone[i] = 1
        }
      }
    }
    
    return count >= n ? true : false
};
