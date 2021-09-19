
var DetectSquares = function() {
    this.xMap = new Map();
    this.yMap = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const [ x, y ] = point;

    // X-map
    if (this.xMap.has(x)) {
        const xMap = this.xMap.get(x);

        if (xMap.has(y)) {
            xMap.set(y, xMap.get(y) + 1);
        } else {
            xMap.set(y, 1);
        }
    } else {
        const countMap = new Map();
        countMap.set(y, 1);
        this.xMap.set(x, countMap);
    }

    // Y-map
    if (this.yMap.has(y)) {
        const yMap = this.yMap.get(y);

        if (yMap.has(x)) {
            yMap.set(x, yMap.get(x) + 1);
        } else {
            yMap.set(x, 1);
        }
    } else {
        const countMap = new Map();
        countMap.set(x, 1);
        this.yMap.set(y, countMap);
    }
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    const [ x, y ] = point;
    let ans = 0;

    if (this.xMap.has(x) && this.yMap.has(y)) {
        for (const y2 of this.xMap.get(x).keys()) {
            if (y === y2) {
                continue;
            }

            // Find parallel
            const sideLen = Math.abs(y - y2);
            const possibleX = [ x - sideLen, x + sideLen];

            for (const px of possibleX) {
                if (this.yMap.get(y).has(px) && this.xMap.has(px) && this.xMap.get(px).has(y2)) {
                    ans += this.xMap.get(x).get(y2) * this.yMap.get(y).get(px)
                        * this.xMap.get(px).get(y2);
                }
            }
        }
    }

    return ans;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
