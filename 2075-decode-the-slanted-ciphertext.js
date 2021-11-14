/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    let n = encodedText.length;
    let cols = ~~(n / rows);
    const matrix = Array.from({ length: rows }, () => Array(cols).fill('')) 
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          matrix[i][j] = encodedText[i * cols + j];
        }
    }
    let ans = "";
    for (let i = 0; i < cols; i++) {
        let t = Math.min(rows, cols - i);
        for (let j = 0; j < t; j++) {
          ans += matrix[j][i + j];
        }
    }
    let idx = ans.length - 1
    for(; idx >= 0; idx--) {
      if(ans[idx] === ' ') continue
      else break
    }
    return ans.slice(0, idx + 1);
};

