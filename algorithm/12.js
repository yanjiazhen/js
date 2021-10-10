/*203. 移除链表元素
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

示例 1：
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
示例 2：

输入：head = [], val = 1
输出：[]
链接：https://leetcode-cn.com/problems/remove-linked-list-elements/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // 第一种迭代
    // let ret = new ListNode(0, head) // 定义新的单链表，以0开头的
    // let cur = ret;
    // // 便利一次
    // while (cur.next) {
    //     if (cur.next.val === val) {
    //         // 获取到相同值就推出进行下一轮
    //         cur.next = cur.next.next
    //     } else {
    //         // 比较一次挪动一次位置
    //         cur = cur.next;
    //     }
    // }
    // return ret.next

    // 第二种递归
    if (head === null) {
        return head;
    }
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};