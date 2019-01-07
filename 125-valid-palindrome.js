/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  let start = 0
  let end = s.length - 1

  while(start < end) {
    while(start < s.length && !valid(s[start])) {
      start++      
    }
    while(end >=0 && !valid(s[end])) {
      end--      
    }
    if(start < s.length && end >=0) {
      if(s[start].toLowerCase() !== s[end].toLowerCase()) return false           
    }
    start++
    end--
  }
  return true
};

function valid(c) {
  const code = c.toLowerCase().charCodeAt(0)
  const zeroCode = ('0').charCodeAt(0)
  const nineCode = ('9').charCodeAt(0)
  const aCode = ('a').charCodeAt(0)
  const zCode = ('z').charCodeAt(0)
  if( (code >= zeroCode && code <= nineCode) || ( code >= aCode && code <= zCode ) ) return true
     
  return false
} 
