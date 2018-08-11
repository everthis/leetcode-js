/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
const customSortString = function(S, T) {
  const arr = [];
  const remaining = [];
  const hash = {};
  for (let i = 0; i < S.length; i++) {
    if (T.indexOf(S.charAt(i)) !== -1) {
      arr.push(S.charAt(i));
    }
  }
  let char;
  for (let j = 0; j < T.length; j++) {
    char = T.charAt(j);
    if (arr.indexOf(char) === -1 && remaining.indexOf(char) === -1) {
      remaining.push(char);
    }
    hash[char] = hash.hasOwnProperty(char) ? hash[char] + 1 : 1;
  }
  return `${genPart(arr, hash)}${genPart(remaining, hash)}`;
};

function constructStr(char, num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += char;
  }
  return str;
}

function genPart(arr, hash) {
  return arr.reduce((ac, el) => {
    return ac + constructStr(el, hash[el]);
  }, "");
}

console.log(customSortString("kqep", "pekeq"));
console.log(
  customSortString(
    "hucw",
    "utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh"
  )
);
