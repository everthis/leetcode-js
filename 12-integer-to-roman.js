/**
 * @param {number} num
 * @return {string}
 */
const map = {
  "1000": "M",
  "900": "CM",
  "500": "D",
  "400": "CD",
  "100": "C",
  "90": "XC",
  "50": "L",
  "40": "XL",
  "10": "X",
  "9": "IX",
  "5": "V",
  "4": "IV",
  "1": "I"
};
const intToRoman = function(number) {
  const l = fkey(map, number);
  if (number == +l) {
    return map[number];
  }
  return map[l] + intToRoman(number - +l);
};

function fkey(m, num) {
  const keys = Object.keys(m);
  const sArr = keys.filter(el => +el <= num);
  return +Math.max.apply(Math, sArr);
}
