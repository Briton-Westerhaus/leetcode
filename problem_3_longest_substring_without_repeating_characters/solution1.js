/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const slen = s.length;
    if (slen <= 1)
        return slen;
    let subst = '';
    let i = 0, length = 1, run = 1;
    let charIndex = 0;
    while (i + run < slen) {
        subst = s.substring(i, i + run);
        charIndex = subst.indexOf(s[i + run]) + 1;
        if (charIndex != 0) {
            i += charIndex;
            run -= charIndex;
        }
        run++;
        length = Math.max(run, length);
    }
    return length;
};