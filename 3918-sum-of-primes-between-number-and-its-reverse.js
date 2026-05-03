/**
 * @param {number} n
 * @return {number}
 */
var sumOfPrimesInRange = function(n) {
    const r = Number((n + '').split('').reverse().join(''))
    return h(Math.min(n, r), Math.max(n, r))
    
    function h(start, end) {
        let sum = []
        if(start < 0) start = 1

        for(let i = start; i <= end; i++) {
            if(isPrime(i)) sum.push(i)
        }
        return sum.reduce((ac, e) => ac + e, 0)
    }


    function isPrime(num) {
        if(num < 1) return false
        let sqrtNum = Math.floor(Math.sqrt(num))
        let prime = num != 1

        for(let i = 2; i < sqrtNum + 1; i++) {
            if(num % i === 0) {

                prime = false
                break
            }
        }

        return prime
    }
};
