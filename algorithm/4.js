/*227. 基本计算器 II
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
整数除法仅保留整数部分。
 
示例 1：
输入：s = "3+2*2” 输出：7
示例 2：
输入：s = " 3/2 “ 输出：1
示例 3：
输入：s = " 3+5 / 2 “ 输出：5
链接：https://leetcode-cn.com/problems/basic-calculator-ii/submissions/
解题：*/
var calculate = function(s) {
    var  q = [], n = '', f = '+'
    for (var i = 0; i < s.length || n; i++) {
        if (s[i] === ' ') continue
        if (/\D/.test(s[i])) {
            switch (f) {
                case '+':
                    q.push(n) 
                break;
                case '-':
                    q.push(-n) 
                break;  
                case '*':
                    q.push(q.pop() * n) 
                break;
                case '/':
                    q.push(q.pop() / n | 0) 
            }
            f = s[i], n = ''
        } else n += s[i]
    }
    return q.reduce((p, v) => p + (v | 0), 0)
};
calculate(3+2*2)