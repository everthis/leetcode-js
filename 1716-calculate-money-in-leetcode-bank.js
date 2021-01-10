/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function(n) {
    let total = 0
    for(let i = 0 ; i < n; i++) {
      const base = (i / 7) >> 0
      const remain = i % 7 + 1
      total += base + remain
    }

    return total
};
