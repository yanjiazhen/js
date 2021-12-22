/*15. 三数之和 [2021-1209]
**链接：** https://leetcode-cn.com/problems/3sum/
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解法：先排序，双指针，一层for循环用于指定某个数，左侧l=i+1，右侧r= 数组长度-1，比较三数之和*/

var threeSum = function(nums) {
    const len = nums.length;
    if(len < 3) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for(let i = 0; i < len - 2; i++) {
        if(nums[i] > 0) break;
        // a去重
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = len - 1;
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum < 0) { l++; continue };
            if(sum > 0) { r--; continue };
            res.push([nums[i], nums[l], nums[r]])
            // b c 去重 
            while(l < r && nums[l] === nums[++l]); // 如果l < r && nums[l] === nums[l+1] 则 l++
            while(l < r && nums[r] === nums[--r]);
        }
    }
    return res;
};

