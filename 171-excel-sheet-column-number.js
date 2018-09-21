/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
  const arr = s.split("");
  const len = arr.length;
  const uac = "A".charCodeAt(0);
  return arr.reduce((ac, el, idx, arr) => {
    return ac + Math.pow(26, len - idx - 1) * (`${el}`.charCodeAt(0) - uac + 1);
  }, 0);
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AA"));
