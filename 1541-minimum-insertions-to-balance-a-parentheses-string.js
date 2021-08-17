/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function(s) {
    let res = 0, right = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) == '(') {
            if (right % 2 > 0) {
                right--;
                res++;
            }
            right += 2;
        } else {
            right--;
            if (right < 0) {
                right += 2;
                res++;
            }
        }
    }
    return right + res;
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function(s) {
  let add = 0, req = 0 // number of parentheses added, number of closing parentheses required
  for(let ch of s) {
    if(ch === '(') {
      req += 2
      if(req % 2 === 1) {
         add++
         req--
      }
    } else {
      if(req === 0) {
        add++
        req++
      }else {
        req--
      }
    }
  }
  
  return add + req
};

