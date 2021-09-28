/*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
示例 1：
输入：s = "()"
输出：true
示例 2：
输入：s = "()[]{}"
输出：true
示例 3：
输入：s = "(]"
输出：false
链接：https://leetcode-cn.com/problems/valid-parentheses*/

const isValid = (s) => {
    if (!s.length % 2 || !s.length) {
        return false
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c == '{' || c == '[' || c == '(') { // 是左括号，入栈
            stack.push(c);
        } else {                                // 是右括号
            if (stack.length == 0) {              // 此时栈空，无法匹配
                return false;
            }
            const top = stack[stack.length - 1];  // 获取栈顶
            if (top == '(' && c == ')' || top == '[' && c == ']' || top == '{' && c == '}') {
                stack.pop();                        // 如果栈顶是对应的左括号，被匹配，出栈
            } else {                              // 不是对应的左括号，无法匹配
                return false;
            }
        }
    }
    return stack.length == 0; // 栈空，则所有左括号找到匹配；栈中还剩有左括号，则没被匹配
};
isValid('()[}]')