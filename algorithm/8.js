/*35. 搜索插入位置
难度简单1099
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。
链接：https://leetcode-cn.com/problems/search-insert-position/*/

var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let cen
    while (left <= right) {
        cen = Math.floor((left + right) / 2)
        if (nums[cen] < target) {
            left = cen + 1
            // 说明目标值在右半区
        } else if (nums[cen] > target) {
            // 说明目标值在左半区
            right = cen - 1
        } else {
            return cen
        }
    }
    return left // 或者right + 1

};
