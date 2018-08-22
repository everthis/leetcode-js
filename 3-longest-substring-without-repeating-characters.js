/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  // var p=0, q=0; //p: start of the sub, q: end of the queue

  //hashmap in js????? Array.indexOf
  const sub = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s.charAt(i));
    if (index == -1) {
      sub.push(s.charAt(i));
      // q++;
    } else {
      //find repeat, get index of repeat el, remve all el before that index
      sub = sub.slice(index + 1, sub.length);
      sub.push(s.charAt(i));
    }
    max = Math.max(max, sub.length);
  }
  return max;
};
