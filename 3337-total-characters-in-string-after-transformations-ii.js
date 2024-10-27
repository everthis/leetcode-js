const MOD = 1e9 + 7;
const MODn = BigInt(MOD);
/**
 * @param {string} s
 * @param {number} t
 * @param {number[]} nums
 * @return {number}
 */
var lengthAfterTransformations = function(s, t, nums) {
    let vec = new Array(26).fill(0);
    for(let i = 0; i < s.length; ++i) {
        let chr = s.charCodeAt(i) - 'a'.charCodeAt(0);
        vec[chr] += 1;
    }
    let mat = new Array(26).fill(0).map(_ => new Array(26).fill(0n));
    for(let i = 0; i < 26; ++i) {
        let count = nums[i];
        let j = (i + 1) % 26;
        while(count > 0) {
            mat[i][j] = 1n;
            --count;
            
            j = (j + 1) % 26;
        }

    }

    mat = matPow(mat, t);
    let result = 0;
    for(let i = 0; i < 26; ++i) {
        for(let j = 0; j < 26; ++j) {
            result += vec[i] * Number(mat[i][j]);
        }
        result = result % MOD;
    }

    return result;
};



function multiplyInto(mat1, mat2, output, tmp) {

    for(let i = 0; i < output.length; ++i) {
        for(let j = 0; j < output[0].length; ++j) {
            let result = 0n;
            for(let k = 0; k < output.length; ++k) {
                result += mat1[i][k] * mat2[k][j];
                result %= MODn;
            }
            tmp[i][j] = result;
        }
    }

    for(let i = 0; i < output.length; ++i) {
        for(let j = 0; j < output[0].length; ++j) {
            output[i][j] = tmp[i][j];
        }
    }
}

function matPow(mat, exp) {
    const result = new Array(mat.length).fill(0).map(_ => mat[0].slice(0).fill(0n));
    const tmp = new Array(mat.length).fill(0).map(_ => mat[0].slice(0));
    for(let i = 0; i < result.length; ++i) {
        result[i][i] = 1n;
    }

    while (exp) {
        if (exp & 1) { multiplyInto(mat, result, result, tmp); }
        multiplyInto(mat, mat, mat, tmp);
        exp >>>= 1;
    }

    return result;
}
