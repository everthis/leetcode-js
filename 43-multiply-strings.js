/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  let m = num1.length,
    n = num2.length;
  let pos = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = (num1.charAt(i) - "0") * (num2.charAt(j) - "0");
      let p1 = i + j,
        p2 = i + j + 1;
      let sum = mul + pos[p2];

      pos[p1] += Math.floor(sum / 10);
      pos[p2] = sum % 10;
    }
  }

  let str = "";
  for (let p of pos) if (!(str.length === 0 && p === 0)) str += p;
  return str.length === 0 ? "0" : str;
};
