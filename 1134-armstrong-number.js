/**
 * @param {number} n
 * @return {boolean}
 */
const isArmstrong = function(n) {
    //number of digits in N
    let k = ~~(Math.log10(n) + 1);
    //temporary variable (so we dont modify N)
    let x = n;
    //to hold sum
    let sum = 0;
    //get each digit
    while (x !== 0) {
        //add this digit^k to sum
        sum += Math.pow(x % 10, k);
        //get next digit
        x = ~~(x/10);
    }
    return sum == n;
};
