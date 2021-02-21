/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
const canChoose = function(groups, nums) {
    const m = groups.length;
    let gi = 0;
    let ni = 0;
    while (ni < nums.length && gi < m)
    {
        let check = true;
        for (let i = 0; i < groups[gi].length; i++)
        {
            if (ni + i >= nums.length || groups[gi][i] != nums[ni + i])
            {
                check = false;
                break;
            }
        }

        if (check)
        {
            ni += groups[gi].length;
            gi++;
        }
        else
        {
            ni++;
        }
    }

    return gi >= m;
};

