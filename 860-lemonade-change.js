/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;
  for (let el of bills) {
    if (el === 5) {
      five += 1;
    } else if (el === 10) {
      if (five < 1) return false;
      five -= 1;
      ten += 1;
    } else {
      if (five > 0 && ten > 0) {
        five -= 1;
        ten -= 1;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
