/*给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
你可以按任意顺序返回答案。
示例 1：
输入：nums = [2,7,11,15], target = 9

输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
链接：https://leetcode-cn.com/problems/two-sum*/
var twoSum = function (nums, target) {
    let i = 0, j;
    let len = nums.length;
    let all = []
    for (i; i < len; i++) {
        for (j = i; j < len - 1; j++) {
            if (nums[i] + nums[j + 1] === target) {
                all = [i, j + 1]
            }
        }
    }
    return all
};
function twoSum2(nums, target) {
    let res = [], len = nums.length;
    for (let i = 0; i < len; i++) {
        let aims = target - nums[i];
        let j = nums.indexOf(aims);
        if (j > -1 && j !== i) {
            res = [i, j];
            break;
        }
    }
    return res;
};

twoSum([1, 3, 5, 2, 8], 10)