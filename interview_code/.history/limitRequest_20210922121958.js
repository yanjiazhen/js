/*
实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
• 要求最大并发数 maxNum
• 每当有一个请求返回，就留下一个空位，可以增加新的请求
• 所有请求完成后，结果按照 urls 里面的顺序依次打出Ï
*/
function request(urls, maxNum) {
    let _url = [...urls]
    let arrRes = []
    let StackNum = 0
    return new Promise((resolve, reject) => {
        // 请求数量小于并发数量开始请求
        while (StackNum < maxNum && _url.length > 0) {
            next()
        }
        function next() {
            StackNum++
            // 请求数量大于并发数量则退出请求
            if (StackNum > maxNum || _url.length == 0) return
            let reqUrl = _url.shift()
            fetch(reqUrl).then(res => {
                arrRes.push(reqUrl)
            }).finally(rr => {
                stackNum--;
                if (stackNum == 0 && _url.length == 0) {
                    // 所有请求全部返回完毕
                    resolve(arrRes);
                    return
                } else {
                    next();
                }
            })
        }
    })


}