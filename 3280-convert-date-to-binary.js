/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let temp = [], res =[]
    for(let i of date){
        if(i=='-'){
            temp = dec_to_bin(temp.join(''))
            res.push(...temp)
            temp = []
            res.push('-')
        }
        else temp.push(i)
    }
    temp = dec_to_bin(temp.join(''))
    res.push(...temp)
    return res.join('')
};

function dec_to_bin( a){
    let b = +(a)
    let res = []
    while(b>0){
        if(b&1)res.push('1')
        else res.push('0')
        b>>=1
    }
    res.reverse()
    return res
}
