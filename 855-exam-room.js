/**
 * @param {number} n
 */
const ExamRoom = function(n) {
    let a = [];
    return { seat, leave }
    function seat() {
        if (a.length == 0) {
            a.push(0);
            return 0;
        }
        let dis = Math.max(a[0], n - 1 - a[a.length - 1]);
        for (let i = 1; i < a.length; i++) dis = Math.max(dis, a[i] - a[i - 1] >> 1);
        if (a[0] == dis) {
            a.unshift(0);
            return 0;
        }
        for (let i = 1; i < a.length; i++) {
            if (a[i] - a[i - 1] >> 1 == dis) {
                a.splice(i, 0, a[i] + a[i - 1] >> 1);
                return a[i];
            }
        }
        a.push(n - 1);
        return n - 1;
    }
    function leave(p) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] == p) {
                a.splice(i, 1);
                break;
            }
        }
    }
};
