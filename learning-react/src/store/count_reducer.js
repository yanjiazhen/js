/*
reducer是纯函数
 */
import {INCREMENT,DECREMENT} from './constant'

const initState = 0
export default function countReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            console.log(preState, data)
            return preState + data;
        case DECREMENT:
            return preState - data;
        default: //初始化状态的时候，preState为undefined，所以参数也赋初值
            return preState
    }

}