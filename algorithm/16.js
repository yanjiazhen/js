/*3. 无重复字符的最长子串【2022-0106】
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
**链接：**https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
题解：滑动弹窗，存在即退栈，对比子串长度保留最长*/

var lengthOfLongestSubstring = function (s) {
    let len = s.length, arr = [], num = 0
    for (let i = 0; i < len; i++) {
        while (arr.includes(s[i])) {
            arr.shift()
        }
        arr.push(s[i])
        num = Math.max(num, arr.length)
    }
    return num 
};
