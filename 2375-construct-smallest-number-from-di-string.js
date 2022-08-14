/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const n = pattern.length
    let res = ''
    dfs('', new Set())
  
    return res
    
    function dfs(str, set) {
      if(str.length === n + 1) {
        if(valid(str)) {
          if(res === '') res = str
          else if(str < res) res = str
        } 
        return
      }
      
      for(let i = 1; i <= 9; i++) {
        if(set.has(i)) continue
        set.add(i)
        dfs(str + i, set)
        set.delete(i)
      }
      
    }

    
    function valid(str) {
      for(let i = 0; i < n; i++) {
        if(pattern[i] === 'I' && str[i] >= str[i + 1]) return false
        if(pattern[i] === 'D' && str[i] <= str[i + 1]) return false
      }
      
      return true
    }
};
