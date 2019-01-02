/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
    const positive = []
    const res = []
    for(let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] > 0) {
            positive.push(i)
        } else {
            const negVal = asteroids[i];

            while(positive.length > 0 && asteroids[ positive[positive.length - 1] ] + negVal < 0 ) {
                asteroids[ positive[positive.length - 1] ] = undefined
                positive.pop()
            }

            if (positive.length > 0) {
                if (asteroids[ positive[positive.length - 1] ] + negVal > 0) {
                    asteroids[i] = undefined
                } else if(asteroids[ positive[positive.length - 1] ] + negVal === 0) {
                    asteroids[i] = undefined
                    asteroids[ positive[positive.length - 1] ] = undefined
                    positive.pop()
                }
            }
        }
    }
    return asteroids.filter(el => el !== undefined)
};
