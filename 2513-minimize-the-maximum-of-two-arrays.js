/**
 * @param {number} divisor1
 * @param {number} divisor2
 * @param {number} uniqueCnt1
 * @param {number} uniqueCnt2
 * @return {number}
 */
var minimizeSet = function(divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
    let d1 = divisor1, d2 = divisor2, u1 = uniqueCnt1, u2 = uniqueCnt2
    let lo = 1n, hi = 10n ** 17n;
    while (hi > lo + 1n) {
        let mid = (lo + hi) >> 1n;
        if (check(Number(d1), Number(d2), Number(u1), Number(u2), Number(mid))) hi = mid;
        else lo = mid;
    }
    return Number(hi);
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}

function check(d1, d2, u1, u2, x) {
    const A = Math.floor(x / d1);  // A = # of numbers divisible by d1
    const A_ = x - A;              // A' = # of numbers not divisible by d1
    const B = Math.floor(x / d2);  // B = # of numbers divisible by d2
    const B_ = x - B;              // B' = # of numbers not divisible by d2
    const AIB = Math.floor(x / lcm(d1, d2)); // A Intersection B = # of numbers divisible by BOTH d1 AND d2
    const AuB = A + B - AIB;       // A Union B = # of numbers divisible by EITHER d1 OR d2
    const A_I_B_ = x - AuB;        // (A' Union B') = (A Intersection B)' = # of numbers not divisible by NEITHER OF THEM

    // needA = # of numbers needed to have at least u1 numbers of set1, these numbers
    // don't include (A' Union B')
    const needA = (A_ - A_I_B_ >= u1) ? 0 : u1 - (A_ - A_I_B_);

    // needB = # of numbers needed to have at least u2 numbers of set2, these numbers
    // don't include (A' Union B')
    const needB = (B_ - A_I_B_ >= u2) ? 0 : u2 - (B_ - A_I_B_);

    /*
    Why not consider (A' Union B') ?
    -> I will assign those numbers to whichever set needs it.
    */

    // Available (A' Union B') value should be more than the needed # of values to make sets
    return (A_I_B_ >= needA + needB);
}

