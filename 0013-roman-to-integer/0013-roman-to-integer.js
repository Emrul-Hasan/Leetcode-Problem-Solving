/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mappings = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'XL': -20,
        'XC': -20,
        'CD': -200,
        'CM': -200,
        'IV': -2,
        'IX': -2,
    }
    let number = 0
    const parts = s.split('').reverse()
    parts.forEach((item, i) => {
        number += mappings[item] + (mappings[parts[i + 1] + item] || 0)  
    })
    return number;
};
;