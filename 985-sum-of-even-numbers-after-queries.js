/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(A, queries) {
  const res = []
  for(let i = 0; i < queries.length; i++) {
    A[queries[i][1]] += queries[i][0]
    res.push(sum(A))
  }
  return res
};

function sum(arr) {
  return arr.reduce((ac, el) => ac + (el % 2 === 0 ? el : 0), 0)
}

// another, better

const sumEvenAfterQueries = function(A, queries) {
    let sum = A.reduce((acc, cur) => cur%2 == 0 ? acc + cur : acc, 0);
    return queries.map((q) => {
        let i = q[1];
        let s = A[i] + q[0];
        if(s%2 === 0) {
            sum += q[0];
            if(A[i]%2 !== 0) sum += A[i];
        } else if(A[i]%2 === 0) sum -= A[i];
        A[i] = s;
        return sum;
    });
};
