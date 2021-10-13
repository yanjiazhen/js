// 发布订阅模式
/*发布-订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。
订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Event Channel），
发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）
订阅者注册到调度中心的处理代码。
*/
/*
参考：https://www.jianshu.com/p/d755909b85f8
 */

var _Event = (function () {
    var clienlist = {}, // 事件合集
        addlisten, trigger, remove;
    /**
     * 增加订阅者
     参数key：订阅模块名称，fn回掉函数，可扩展订阅内容
     * */
    addlisten = function (key, fn) {
        // 相当于对某个订阅进行监听
        if (!clienlist[key]) {
            clienlist[key] = [];
        }
        clienlist[key].push(fn);
        // 这里应该还需要添加判断是否重复订阅了
    };
    /**
     * 发布消息
     * 第一个参数必须是发布消息的模块名称，后面对应订阅的扩展内容
     * */
    // TODO 如何把发布的消息让所有相关订阅者度能看到呢
    trigger = function () {
        var key = [].shift.call(arguments),//取出消息类型
            fns = clienlist[key];//取出该类型的对应的消息集合(返回触发的发布者)
        if (!fns || fns.length === 0) {
            return false;
        }
        // 发布消息，通知订阅的模块
        fns[0].apply(this, arguments);
        // for (var i = 0, fn; fn = fns[i++];) {
        //     fn.apply(this, arguments);
        // }
    };
    /**
     * 删除订阅
     * @key {String} 类型
     * @fn {Function} 回掉函数
     * */
    remove = function (key) {
        // var fns = clienlist[key];//取出该类型的对应的消息集合
        // if (!fns) {//如果对应的key没有订阅直接返回
        //     return false;
        // }
        // debugger
        // if (!fn) {//如果没有传入具体的回掉，则表示需要取消所有订阅
        //     fns && (fns.length = 0);
        // } else {
        //     for (var l = fns.length - 1; l >= 0; l--) {//遍历回掉函数列表
        //         console.log(clienlist,key, fn, fns)
        //         if (fn === fns[l]) {
        //             fns.splice(l, 1);//删除订阅者的回掉
        //         }
        //     }
        // }
        if (!clienlist[key]) {//如果对应的key没有订阅直接返回
            return false;
        }
        // 没有传入key，询问是否要删除所有订阅
        if(!key){
            console.log('是否要删除所有订阅')
        }
        delete clienlist[key]
        // console.log(clienlist)
    };
    return {
        addlisten: addlisten,
        trigger: trigger,
        remove: remove
    }
})();

/* 
发布者随意发布，可以只订阅感兴趣的模块，相当于up主发送了好多推文，我只订阅了其中的美食模块，那么我只会收到美食模块的推文
只有先完成订阅才能发布
*/
// 添加订阅
_Event.addlisten("eat", function (from, msg) {
    console.log("发布的消息来自：" + from + "，具体信息：" + msg);
});
_Event.addlisten("fit", function (from, msg) {
    console.log("发布的消息来自：" + from + "，具体信息：" + msg);
});
_Event.addlisten("sleep", function (from, msg) {
    console.log("发布的消息来自：" + from + "，具体信息：" + msg);
});
// 删除订阅sleep
_Event.remove('sleep')
// 发布
_Event.trigger("eat", "yan", "今天吃了螺丝粉")
_Event.trigger("eat", "yan", "今天吃臭豆腐")
_Event.trigger("fit", "yan", "今天健身")
_Event.trigger("sleep", "yan", "好了该睡觉了")




