/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
  const stk = [], n = asteroids.length, {abs} = Math
  for(const e of asteroids) {
    while(stk.length && stk.at(-1) > 0 && e < 0 && -e > stk.at(-1)) {
      stk.pop()
    }
    if(stk.length && stk.at(-1) > 0 && e < 0 && -e === stk.at(-1)) {
      stk.pop()
    }else if(stk.length && stk.at(-1) > 0 && e < 0 && -e < stk.at(-1)) {
      
    }else stk.push(e)
  }
  return stk
};

// another


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
