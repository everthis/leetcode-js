/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(single(i));
  }

  return res;
};

function single(num) {
  let str = "";
  if (num % 3 === 0) {
    str += "Fizz";
  }
  if (num % 5 === 0) {
    str += "Buzz";
  }
  if (str === "") {
    str += num;
  }
  return str;
}

console.log(fizzBuzz(15));
