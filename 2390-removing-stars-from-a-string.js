/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stk = []
    for(const e of s) {
      if(e !== '*') stk.push(e)
      else {
        stk.pop()
      }
    }
    return stk.join('')
};
