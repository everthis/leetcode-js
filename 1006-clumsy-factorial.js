/**
 * @param {number} N
 * @return {number}
 */
const clumsy = function(N) {
  const ops = ["*", "/", "+", "-"];
  const arr = [];
  arr.push(N);
  for (let i = N - 1, idx = 0; i > 0; i--, idx++) {
    let op = ops[idx % 4];
    let arrIdx = arr.length - 1 < 0 ? 0 : arr.length - 1;
    switch (op) {
      case "*":
        arr[arrIdx] *= i;
        break;
      case "/":
        arr[arrIdx] = Math.floor(arr[arrIdx] / i);
        break;
      case "+":
        arr[0] += i;
        break;
      case "-":
        arr.push(i);
        break;
    }
  }

  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res -= arr[i];
  }
  return res;
};
