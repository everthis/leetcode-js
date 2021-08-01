/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function(neededApples) {
    let l = 0, r = 100000;
    while (l + 1 < r) {
        let w = (l + r) >> 1;
        let apples = 2 * w * (w + 1) * (2 * w + 1);
        if (apples >= neededApples) {
            r = w;
        } else {
            l = w;
        }
    }

    return r * 8;  
};
