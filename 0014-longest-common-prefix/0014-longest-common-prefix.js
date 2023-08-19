/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return ''
    let longerstCommonPrefix = ''
    for(let i=0; i< strs[0].length; i++) {
        let char = strs[0][i]
        if(!char) return ''
        if(strs.every(str => str[i] === char)) {
            longerstCommonPrefix+=char
        } else break
    }
    return longerstCommonPrefix
};