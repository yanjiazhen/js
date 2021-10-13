
// reduce (callback(total, cur, curInd, arr),[initTotal])reduce() 方法循环迭代，回调函数的结果都会作为下一次的形参的第一个参数。
/*
注意：调用的需要是数组否则报错，空数组也会报错
reduce的第一个参数是个回掉函数
回掉函数四个参数：
total：初始值（如果reduce第二个参数有值，则可以用reduce第二个参数赋值，否则取数组第一个值）
cur：当前值（取数组第一个值或者第二个值，取决于第一个参数）
curInd：当前索引
arr：数组
第二个参数是可选值，
initTotal：作用是给回掉函数的第一个值去赋值
*/
Array.prototype.reduce = function (fn, initValue) {
    initValue = initValue ? initValue : this[0]
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (!this.hasOwnProperty(i)) {
            continue
        }
        result = fn(result, this[i], i, this)
    }
    return result
}
const arr = [1, 3, 6, 5]
const mapArr = arr.reduce(item => item*2,6)
console.log(mapArr)

Array.prototype.fakeReduce = function fakeReduce(fn, base) {
    // 判断第一个参数是否回掉函数
    if (typeof fn !== "function") {
        throw new TypeError("arguments[0] is not a function");
    }
    // 判断初始值是否为空（base也可提供初始值）
    if (this.length < 1 && !base) {
        throw new TypeError("Reduce of empty array with no initial value");
    }
    let initialArr = this; // 回掉函数第四个参数

    let arr = initialArr.concat(); // 浅拷贝函数

    if (base) arr.unshift(base); // 若是reduce第二个参数有值，则赋值给到回掉函数的第一个参数
    let index, newValue;
    // 判断数组长度执行代码
    while (arr.length > 1) {
        index = initialArr.length - arr.length + 1; //当前索引
        newValue = fn.call(null, arr[0], arr[1], index, initialArr); //返回值
        arr.splice(0, 2, newValue); // 直接用 splice 实现替换，将获取的最新值去替换数组前两位(相当于操作了数组前两位，取值将其替换掉)
        // console.log('返回', arr, newValue)
    }
    return newValue || base; // 若是返回值为空，则返回base
};



// Array.prototype.selfReduce = function (callback, initalValue) {
//     // 不能是null调用方法
//     if (this === null) {
//         throw new TypeError(
//             "Array.prototype.reduce" + "called on null or undefined"
//         );
//     }
//     // 第一个参数必须要为function
//     if (typeof callback !== "function") {
//         throw new TypeError(callback + " is not a function");
//     }
//     // 声明要用到的变量
//     // 要循环的数组
//     let arr = Array.prototype.slice.call(this);
//     let _len = arr.length;
//     // 结果数组
//     let res = [];
//     // 开始的数组索引 默认为 0
//     let startIndex = 0;

//     // 判断是否为有初始化值 initalValue
//     if (initalValue === undefined) {
//         // 如果初始值为 undefined 循环从数组中找到有值，并且退出循环
//         // 过滤稀疏值
//         for (let i = 0; i < _len; i++) {
//             if (!arr.hasOwnProperty(i)) {
//                 continue;
//             } else {
//                 startIndex = i;
//                 res = arr[i];
//                 break;
//             }
//         }
//     } else {
//         res = initalValue;
//     }

//     // 在上一步拿到初始值，循环调用传入的回调函数，并且过滤松散值
//     for (let i = startIndex++; i < arr.length; i++) {
//         if (!arr.hasOwnProperty(i)) {
//             continue;
//         }
//         res = callback.call(null, res, arr[i], i, this);
//     }
//     return res;
// };

