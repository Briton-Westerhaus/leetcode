/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let rows = [];
    let row = 0;
    let direction = 1;
    for (let i = 0; i < s.length; i++) {
        if (rows[row] == undefined)
            rows[row] = '';
        rows[row] += s.charAt(i);
        row += direction;
        if (row == numRows - 1 || row == 0)
            direction *= -1;

    }
    
    return rows.join('');
};