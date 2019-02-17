/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
const canTransform = function(start, end) {
    let r = 0, l = 0;
    for (let i = 0; i < start.length; i++){
        if (start.charAt(i) === 'R'){ r++; l = 0;}
        if (end.charAt(i) === 'R') { r--; l = 0;}
        if (end.charAt(i) === 'L') { l++; r = 0;}
        if (start.charAt(i) === 'L') { l--; r = 0;}
        if (l < 0 || r < 0) return false;
    }

    if (l != 0 || r != 0) return false;
    return true; 
};
