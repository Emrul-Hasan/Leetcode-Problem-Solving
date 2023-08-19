/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return s.indexOf('Infinity') === -1 && !isNaN(+s);
};
console.log(isNumber("0")) ;