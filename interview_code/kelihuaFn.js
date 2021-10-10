/*JS函数柯里化
[参数复用\提前确认\延迟运行]
函数柯里化的是一个为多参函数实现递归降解的方式。其实现的核心是:
要思考如何缓存每一次传入的参数
传入的参数和目标函数的入参做比较*/

const curry = (fn) => {
    let parmas = [];
    const next = (...args) => {
        parmas = [...parmas, ...args];
        if (parmas.length < fn.length){
            return next;
        } else {
            return fn.apply(fn,parmas)
        }
    }
    return next
}

const sum = (a, b, c, d) =>{
    return a + b + c + d
}

const fn = curry(sum)
const res = fn(1)(2)(3)(4)
console.log(res)

// // 普通的add函数
// function add(x, y) {
//     return x + y
// }

// // Currying后
// function curryingAdd(x) {
//     return function (y) {
//         return x + y
//     }
// }

// add(1, 2)           // 3
// curryingAdd(1)(2)   // 3

