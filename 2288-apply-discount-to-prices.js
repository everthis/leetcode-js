/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
   const arr = sentence.split(' '), n = arr.length
   for(let i = 0; i < n; i++) {
     const cur = arr[i]
     const rest = cur.slice(1)
     if(cur.startsWith('$') && rest.length && !Number.isNaN(+rest)) {
       arr[i] = '$' + ((+rest) * (100 - discount) / 100).toFixed(2)
     }
   }
  return arr.join(' ')
};
