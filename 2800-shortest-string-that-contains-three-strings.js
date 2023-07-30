const lexical_smallest_comp = (x, y) => x < y ? -1 : x > y ? 1 : 0;
const merge = (s, t) => {
    if (s.indexOf(t) != -1) return s;
    // concat based on suffix
    for (let l = Math.min(s.length, t.length); l > 0; l--) {
        if (s.slice(-l) == t.slice(0, l)) return s.slice(0, -l) + t;
    }
    return s + t;
};
/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
const minimumString = (a, b, c) => {
    let d = [merge(merge(a, b), c), merge(merge(a, c), b), merge(merge(b, a), c), merge(merge(b, c), a), merge(merge(c, a), b), merge(merge(c, b), a)];
    d.sort((x, y) => {
        if (x.length != y.length) return x.length - y.length;
        return lexical_smallest_comp(x, y);
    })
    return d[0];
};
