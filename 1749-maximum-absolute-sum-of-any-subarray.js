/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAbsoluteSum = function(nums) {
            let min = 0, max = 0;
            let positiveSum = 0, negativeSum = 0;
            for (let num of nums)
            {
                positiveSum += num;
                if (positiveSum > max)
                {
                    max = positiveSum;
                }

                if (positiveSum < 0)
                {
                    positiveSum = 0;
                }
                negativeSum += num;
                if (negativeSum < min)
                {
                    min = negativeSum;
                }
                if (negativeSum > 0)
                {
                    negativeSum = 0;
                }
            }

            return Math.max(Math.abs(min), max);
};
