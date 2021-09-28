/*让字符串成为回文串的最少插入次数
给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。
请你返回让 s 成为回文串的 最少操作次数 。
「回文串」是正读和反读都相同的字符串。
链接：https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome
输入：s = "mbadm"
输出：2
解释：字符串可变为 "mbdadbm" 或者 "mdbabdm” 。*/

const minInsertions = s => {
    const LEN = s.length;
    const dp = new Array(n).fill(0)
    for (let i = LEN - 2; i >= 0; i--) {
        let prev = 0;
        for (let j = i + 1; j < LEN; j++) {
            const tmp = dp[j];
            dp[j] = s[i] === s[j] ? prev : 1 + Math.min(dp[j], dp[j - 1]);
            prev = tmp;
        }
    }
    return dp[LEN - 1];
};
minInsertions('ASDFAFDAWE')