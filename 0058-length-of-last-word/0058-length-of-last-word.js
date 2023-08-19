/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     let result = s.trim().split(' ');
  return result[result.length-1].length
};
console.log(lengthOfLastWord("Hello World"));