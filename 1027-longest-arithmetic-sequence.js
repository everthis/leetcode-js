/**
 * @param {number[]} A
 * @return {number}
 */
const longestArithSeqLength = function(A) {
  let a = A
  let n = A.length
  if (n <= 2) return n;

  let i, j, k, d;
  let mxl = 2;
  let current;
  let last;

  //i will be the index of first element of the ap
  for (i = 0; i < n - mxl; i++) {
    //j will be the index of second element of the ap
    for (j = i + 1; j < n - mxl + 1; j++) {
      //common difference
      d = a[j] - a[i];
      last = a[j];
      current = 2;

      for (k = j + 1; k < n; k++) {
        if (a[k] - last == d) {
          //here is our element
          current++;
          last = a[k];
        }
      }

      mxl = Math.max(mxl, current);
    }
  }

  return mxl;
};
