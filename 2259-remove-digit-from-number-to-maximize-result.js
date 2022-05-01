/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = function(number, digit) {
   const arr = number.split('')
   const idxArr = []
   arr.forEach((e,i) => {
     if(e === digit) idxArr.push(i)
   })
   const res = []
   for(const i of idxArr) {
     const clone = arr.slice()
     clone.splice(i, 1)
     res.push(clone.join(''))
   }
   return res.reduce((ac, e) => e > ac ? e : ac, res[0])
};
