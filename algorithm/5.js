/*给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：
输入：nums = [1]
输出：1
链接：https://leetcode-cn.com/problems/maximum-subarray
解法：*/
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
maxSubArray([32, 13, -13, 92, -1, 23, -2, -1, 5])
// 分析：
// 累加值和当前值做对比，返回最大值
// 上一轮的对比值和当前对比值做比较，返回最大值