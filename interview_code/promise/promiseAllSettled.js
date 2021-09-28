/*
1、等传入的数组promise里面所有的发生了状态变更再返回最终状态
2、一旦发生状态变更，状态总是fulfilled
 */

function promiseAllSettled(promise) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promise)) {
            reject(new Error('请传入一个数组'))
        }
        let arr = [];
        let len = promise.length;
        function doLast() {
            if (arr.length == len) {
                return resolve(arr)
            }
        }
        promise.forEach(ele => {
            Promise.resolve(ele).then(res => {
                arr.push(res)
                doLast()
            }, err => {
                arr.push(err)
                doLast()
            })
        });
    })
}