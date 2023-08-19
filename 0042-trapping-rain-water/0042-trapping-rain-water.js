/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
let result = 0;
  let start = 0;
  let end = height.length - 1;
  let startMax = 0;
  let endMax = 0;

  while (start < end) {
    if (height[start] < height[end]) {
      if (height[start] >= startMax) {
        startMax = height[start];
      } else {
        result += startMax - height[start];
      }
      start++;
    } else {
      if (height[end] >= endMax) {
        endMax = height[end];
      } else {
        result += endMax - height[end];
      }
      end--;
    }
  }
  return result;
};
