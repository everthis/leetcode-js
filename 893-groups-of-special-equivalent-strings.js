/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = function(A) {
  return new Set(
    A.map(word =>
      [...word]
        .reduce((counter, c, i) => {
          counter[c.charCodeAt(0) - "a".charCodeAt(0) + 26 * (i % 2)]++;
          return counter;
        }, new Array(52).fill(0))
        .join("-")
    )
  ).size;
};

// another

/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = function(A) {
  const result = new Set();
  for (let i of A) {
    let arr = i.split("");
    let res = [[], []];
    for (let j = 0; j < arr.length; j++) {
      res[j & 1].push(arr[j]);
    }
    result.add(res[0].sort().join("") + res[1].sort().join(""));
  }
  return result.size;
};
