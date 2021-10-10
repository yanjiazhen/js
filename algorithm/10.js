// 76. 最小覆盖子串
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：
// * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 
// 示例 1：
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出：”BANC"
// 链接：https://leetcode-cn.com/problems/minimum-window-substring/
/*
1、子串对象化
2、滑动弹窗对比对象个个数
*/
var minWindow = function (s, t) {
    let obj = {}, allObj = {}, count = l = r = 0, start = -1, minLen = s.length + 1, len = s.length
    for (let i of t) {
        obj[i] ? obj[i]++ : obj[i] = 1
    }
    let sonLen = Object.keys(obj).length
    while (r < len) {
        let c1 = s[r++];
        allObj[c1] ? allObj[c1]++ : allObj[c1] = 1
        if (allObj[c1] === obj[c1]) { count++ }
        while (sonLen === count) {
            if (minLen > r - l) {
                start = l;
                minLen = r - l
            }
            let c2 = s[l++]
            if (allObj[c2]-- === obj[c2]) { count-- }
        }
    }
    return start === -1 ? '' : s.substr(start, minLen)
};
minWindow('ADOBECODEBANC','ABC')
