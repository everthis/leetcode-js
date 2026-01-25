/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const C = Array.from({length: 65}, () => Array(65).fill(0n))
for(let i = 0; i <= 64; i++) {
    C[i][0] = 1n
    for(let j = 1; j <= i; j++) {
        if(j === i) C[i][j] = 1n
        else {
            const v = C[i - 1][j - 1] + C[i - 1][j]
            C[i][j] = v < 0n ? BigInt(Number.MAX_SAFE_INTEGER) : v
        }
    }
}
var nthSmallest = function(n, k) {
    let leftN = BigInt(n)
    const big = BigInt

    let highestBit = 0
    while(true) {
        const count = highestBit >= k - 1 ? C[highestBit][k - 1] : 0n
        if(count >= leftN) break
        leftN -= count
        highestBit++
    }

    let res = 1n << big(highestBit)
    let leftOnes = k - 1

    for(let bit = highestBit - 1; bit >= 0; bit--) {
        if(leftOnes === 0) break

        let cnt = bit >= leftOnes ? C[bit][leftOnes] : 0n

        if(leftN > cnt) {
            leftN -= cnt
            res = res | (1n << big(bit))
            leftOnes--
        }
    }


    return Number(res)
};
