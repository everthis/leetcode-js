/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
  const n = s.length
    let zeros = 0, seconds = 0;
    for (let i = 0; i < n; ++i) {
        zeros += s.charAt(i) == '0' ? 1 : 0;
        if (s.charAt(i) == '1' && zeros > 0)
            seconds = Math.max(seconds + 1, zeros);
    }
    return seconds; 
};
