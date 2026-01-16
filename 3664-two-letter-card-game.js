/**
 * @param {string[]} cards
 * @param {character} x
 * @return {number}
 */
var score = function(cards, x) {
    let x_at_zero = 0, x_at_one = 0, x_at_both = 0;
    let max_freq_zero = 0, max_freq_one = 0;
    const d1 = {}, d2 = {};
    let ans = 0;

    for (const word of cards) {
        if (word[0] === x && word[1] === x) {
            x_at_both++;
        }

        else if (word[0] === x) {
            x_at_zero++;
            d1[word] = (d1[word] || 0) + 1;
            max_freq_zero = Math.max(max_freq_zero, d1[word]);
        }

        else if (word[1] === x) {
            x_at_one++;
            d2[word] = (d2[word] || 0) + 1;
            max_freq_one = Math.max(max_freq_one, d2[word]);
        }
    }

    let remaining_zero = x_at_zero - max_freq_zero;
    let remaining_one = x_at_one - max_freq_one;

    if (max_freq_zero > remaining_zero) {
        ans += remaining_zero;
        x_at_zero = max_freq_zero - remaining_zero;
    }

    else {
        ans += Math.floor(x_at_zero / 2);
        x_at_zero = x_at_zero % 2;
    }

    if (max_freq_one > remaining_one) {
        ans += remaining_one;
        x_at_one = max_freq_one - remaining_one;
    }

    else {
        ans += Math.floor(x_at_one / 2);
        x_at_one = x_at_one % 2;
    }

    let ans1 = Math.min(x_at_zero, x_at_both);
    x_at_both -= ans1;
    let ans2 = Math.min(x_at_one, x_at_both);
    x_at_both -= ans2;
    ans = Math.min(ans * 2, ans + Math.floor(x_at_both / 2));
    ans += ans1 + ans2;
    return ans;  
};
