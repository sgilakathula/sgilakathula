//Problem: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Example usage:
const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums)); // Output: 6 (subarray: [4,-1,2,1])
