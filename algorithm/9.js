/*面试题 08.06. 汉诺塔问题
链接：https://leetcode-cn.com/problems/hanota-lcci/
难度简单115
在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:
(1) 每次只能移动一个盘子;
(2) 盘子只能从柱子顶端滑出移到下一根柱子;
(3) 盘子只能叠在比它大的盘子上。
请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。
你需要原地修改栈。*/

// 递归，n层高的塔移到C等于n-1层高的塔移到B，再把n移到C，再将B中n-1层的塔移到C，递归截至条件位A只有一层高。
var hanota = function (A, B, C) {
    let move = function (m, a, b, c) {
        if (m === 1) { // 当只有一个时直接加到c中
            c.push(a.pop())
        } else {
            move(m - 1, a, c, b) // 将 a 上的 n - 1 个 通过 c 移到 b
            c.push(a.pop()) // 把 a 中剩下的一个直接放到 c
            move(m - 1, b, a, c) // 在把 b 上的 n - 1 个 通过 a 放到 c
        }
    }
    move(A.length, A, B, C)
};