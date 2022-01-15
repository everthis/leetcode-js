/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function(s) {
  let insert = 0, idx = 0, open = 0, len = s.length
  while(idx < len) {
    const ch = s[idx]
    if(ch === '(') {
      open++
      idx++
    } else {
      if(open > 0) {
        open--
      } else {
        insert++
      }
      if(idx < len - 1 && s[idx + 1] === ')') {
        idx += 2
      } else {
        insert++
        idx++
      }
    }
  }
  if(open) insert += open * 2
  return insert
};

// another

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

