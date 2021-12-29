/*151. 翻转字符串里的单词【2021-1229】
给你一个字符串 s ，逐个翻转字符串中的所有 单词 。
请你返回一个翻转 s 中单词顺序并用单个空格相连的字符串。
**链接：**https://leetcode-cn.com/problems/reverse-words-in-a-string/
说明：
输入字符串 s 可以在前面、后面或者单词间包含多余的空格。
翻转后单词间应当仅用一个空格分隔。
翻转后的字符串中不应包含额外的空格。
示例 1：
输入：s = "the sky is blue"
输出："blue is sky the"*/
// 首位空格删除，只留一个空格
// 转成数组，一半转换之后转成字符串 
var reverseWords = function (s) {
    let newS = s.trim().replace(/(\s\s+)/g, ' ').split(/(\s)/g)
    let len = newS.length
    let l = 0, r = len - 1;
    while (r - l >= 2) {
        [newS[l], newS[r]] = [newS[r], newS[l]]
        l = l + 2
        r = r - 2
    }
    return newS.join('')
};
