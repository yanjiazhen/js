// 专门为count组件生成action对象
import {INCREMENT,DECREMENT} from './constant'
export const incrementAction = data => ({ type: INCREMENT, data })
export const decrementAction = data => ({ type: DECREMENT, data })
