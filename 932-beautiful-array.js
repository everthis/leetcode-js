/**
 * @param {number} N
 * @return {number[]}
 */
const beautifulArray = function(N) {
  let res = [];
  res.push(1);
  while (res.length < N) {
    const tmp = [];
    for (let i of res) if (i * 2 - 1 <= N) tmp.push(i * 2 - 1);
    for (let i of res) if (i * 2 <= N) tmp.push(i * 2);
    res = tmp;
  }
  return res;
};
