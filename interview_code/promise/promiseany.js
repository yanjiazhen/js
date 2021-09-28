/*
1\Promise.any()不会因为某个 Promise 变成rejected状态而结束，必须等到所有参数 Promise 变成rejected状态才会结束。
2\只要有一个变成fulfilled，Promise.any()返回的 Promise 对象就变成fulfilled,所有的度rejected之后才会返回reject
*/
function promiseAny(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('arguments must be an array'));
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
        for (var i = 0; i < promiseNum; i++) {
            (function (i) {
                // Promise.resolve可以将参数转成promise的实例子
                Promise.resolve(promises[i]).then(function (value) {
                    return resolve(value)
                }, function (reason) {
                    resolvedCounter++
                    resolvedValues[i] = reason
                    if (resolvedCounter == promiseNum) {
                        return reject(reason)
                    }
                })
            })(i)
        }
    })
}