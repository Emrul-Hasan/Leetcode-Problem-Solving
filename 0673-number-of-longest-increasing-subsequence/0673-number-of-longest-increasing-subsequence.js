/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1);
    const count = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    count[i] = count[j];
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j];
                }
            }
        }
    }
    let maxLen = 0;
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            result = count[i];
        } else if (dp[i] === maxLen) {
            result += count[i];
        }
    }
    return result;
  
};
console.log(findNumberOfLIS([1,3,5,4,7]));
