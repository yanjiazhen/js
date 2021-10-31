/*
reducer是纯函数
 */
const initState = 0
export default function countReducer(preState=initState, action) {
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        default: //初始化状态的时候，preState为undefined，所以参数也赋初值
            return preState
    }

}