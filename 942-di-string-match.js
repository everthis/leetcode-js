/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function(S) {
  const N = S.length
  const arr = []
  for(let i = 0; i <= N; i++) {
    arr[i] = i
  }
  const res = []
  for(let i = 0; i < N; i++) {
    if(S[i] === 'I') {
      res.push(arr.shift())
    } else if(S[i] === 'D') {
      res.push(arr.pop())
    }
  }
  res.push(arr.pop())
  return res
};

// another

/*

it is greedy and one pass !!
so every time when we meet an I, we need to keep in mind that we may meet another I later,
so the safest way is use the smallest number available. same idea when we meet D, 
so in order to keep us safe, we always take largest one available, until we traverse the whole string.
And since the available numbers are sorted(from 0 to S.length()), 
so we can set two pointers one starts from the head(smallest number), 
another from the ends(largest number), then we begin to fill the res array.

*/

/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = function(s) {
  const n = s.length
  let l = 0, r = n
  const res = []
  for(let i = 0; i < n; i++) {
    res.push(s[i] === 'I' ? l++ : r--)
  }
  res.push(r)
  return res
};
