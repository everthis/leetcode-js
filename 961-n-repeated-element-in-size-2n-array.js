/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = function(A) {
    const checkerSet = new Set();
    for (let num of A){
        if (!checkerSet.has(num)){
            checkerSet.add(num);
        } else{
            return num;
        }
    }
};
