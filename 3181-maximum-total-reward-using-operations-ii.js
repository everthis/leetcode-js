/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {
    rewardValues.sort((a, b) => a-b);
    
    let dp = new Uint8Array(rewardValues.at(-1)*2).fill(0);
    let max = rewardValues.at(-1);

    dp[0] = 1;

    for(let i = 0; i < rewardValues.length; ++i) {
        let val = rewardValues[i];
        if(i > 0 && rewardValues[i-1] === val) { continue; }
        let curMax = Math.min(val-1, (max-val)-1);


        for(let j = 0; j <= curMax; ++j) {
            if(dp[j] === 1) {
                let found = j + val;
                dp[found] = 1;
            } else if(dp[j] === 2) {
                //skip ahead
                j += 100;
            } else {
                //determine how big the gap is
                let runStart = j;
                let target = runStart + 100;
                while(j < curMax && j <= target && dp[j] === 0) {
                    ++j;
                }

                if(j >= target) {
                    //the gap is at least 100, mark it as skippable
                    dp[runStart] = 2;
                }
                if(dp[j]) { --j; }
            }
        }

        //we found max-1, since we're including max, no need to continue
        if(dp[max-1]) {
            break;
        }

    }
    
    for(let i = dp.length-1; i >= 0; --i) {
        if(dp[i]) {
            return i + max;
        }
    }

    return -1;
}
