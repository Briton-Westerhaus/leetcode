/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0)
        return false;
    
    x = x.toString();

    let start = 0;
    let end = x.length - 1;

    while (end > start) {
        if (x[start] != x[end])
            return false;
            end--;
            start++;
    }

    return true;
};