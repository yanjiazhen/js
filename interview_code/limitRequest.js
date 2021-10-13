/*
TODO待验证
实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
• 要求最大并发数 maxNum
• 每当有一个请求返回，就留下一个空位，可以增加新的请求
• 所有请求完成后，结果按照 urls 里面的顺序依次打出
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
function multiRequest(forms, max = 4) {
    return new Promise(resolve => {
        const len = forms.length;
        let idx = 0;
        let counter = 0;
        const start = async () => {
            // 有请求，有通道
            while (idx < len && max > 0) {
                max--; // 占用通道
                console.log(idx, "start");
                const form = forms[idx].form;
                const index = forms[idx].index;
                idx++
                request({
                    url: '/upload',
                    data: form,
                    onProgress: this.createProgresshandler(this.chunks[index]),
                    requestList: this.requestList
                }).then(() => {
                    max++; // 释放通道
                    counter++;
                    if (counter === len) {
                        resolve();
                    } else {
                        start();
                    }
                });
            }
        }
        start();
    });
}

function muti(urls, max = 6) {
    return new Promise((resolve, reject) => {
        let len = urls.length;
        let cur = 0;
        let count = 0;
        let arr = []
        function start() {
            while (count < len && max > 0) {
                max--
                fetch(urls[cur]).then(res => {
                    max++;
                    count++;
                    arr.push(res)
                    if(count == len){
                        resolve(arr)
                    }
                })
            }

        }
        start()
    })
}