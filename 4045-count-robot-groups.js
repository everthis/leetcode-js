/**
 * @param {number[]} position
 * @param {number[]} speed
 * @param {number} distance
 * @return {number}
 */
var countGroups = function(position, speed, distance) {
    // const stk = []
    // const pos =position
    // const n = position.length
    // for(let i = n - 1; i >= 0; i--) {
    //     const curPos = pos[i]
    //     const curSpeed = speed[i]
    //     if(stk.length > 0) {
    //         const [ps, psd] = stk[stk.length - 1]

    //         if(ps - curPos <= distance) {
    //             stk[stk.length - 1][0] === curPos
    //             continue
    //         }

    //         if(curSpeed > psd) {
    //             stk[stk.length - 1][0] = curPos
    //             continue
    //         }
    //     }

    //     stk.push([curPos, curSpeed])
    // }

    // return stk.length

    const list = []

    let res = 0
    for(let i = 0; i + 1 < position.length; i++) {
        if(position[i + 1] - position[i] > distance) {
            list.push(i)
        }
    }
    list.push(position.length - 1)

    let tmp = Infinity

    for(let i = list.length - 1; i >= 0; i--) {
        if(speed[list[i]] <= tmp) res++
        tmp = Math.min(tmp, speed[list[i]])
    }

    return res
};
