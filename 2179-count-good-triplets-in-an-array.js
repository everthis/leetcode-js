/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
const goodTriplets = function(a, b) {
    let n = a.length, m = new Map(), res = 0;
    for (let i = 0; i < n; i++) m.set(b[i], i);
    let fen = new Fenwick(n + 3);
    for (let i = 0; i < n; i++) {
       let pos = m.get(a[i]);
       let l = fen.query(pos), r = (n - 1 - pos) - (fen.query(n - 1) - fen.query(pos));
       res += l * r; 
       fen.update(pos, 1);
    }
    return res;
};
function Fenwick(n) {
    let tree = Array(n).fill(0);
    return { query, update }
    function query(i) {
        let sum = 0;
        i++;
        while (i > 0) {
            sum += tree[i];
            i -= i & -i;
        }
        return sum;
    }
    function update(i, v) {
        i++;
        while (i < n) {
            tree[i] += v;
            i += i & -i;
        }
    }
}
