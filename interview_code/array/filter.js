// filter返回一个数组，返回的每一项在回掉函数中执行结果为true
// map 是根据回掉函数映射一个新数组
// https://mp.weixin.qq.com/s/P1TgAfvId4bngRb9oM5Ovw
Array.prototype.filter = function (fn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (!this.hasOwnProperty(i)) {
            continue
        }
        fn(this[i], i, this) && result.push(this[i])
    }
    return result
}

const arr = [1, 3, 6, 5]
const mapArr = arr.filter(item => item > 6)
console.log(mapArr)