/*454. 四数相加【2021-1201】
**链接：**https://leetcode-cn.com/problems/4sum-ii/
给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
0 <= i, j, k, l < n;nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
示例 1：
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
示例 2：
输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
思路：分成2组双次便利算出和的个数，存取map结构，*/

var fourSumCount = function (A, B, C, D) {
    // obj用来存取key是和，value是和的个数
    let num = 0, obj = new Map(), len = A.length, sumAB = 0, sumCD = 0
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            sumAB = A[i] + B[j]
            obj.set(sumAB, (obj.get(sumAB) || 0) + 1)
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            sumCD = C[i] + D[j]
            num += (obj.get(0 - sumCD) || 0)
        }
    }
    return num
}
