/*reactive做的是将传入的对象返回一个全新的代理对象*/
/* 使用Reflect因为
1、后期会使用这个方法替代Object.defineprperty,
2、更友好更安全*/

// let effects = []; // 临时存储数据依赖的数组，双方的关系建立
// function addDep(fn){
//     effects.push(fn)
// }
function reactive(obj) {
    return new Proxy(obj, {
        get(target, key) {
            // debugger
            // 拦截
            console.log('get', target, key)
            // 依赖收集
            track(target, key)
            return Reflect.get(target, key)
        },
        set(target, key, value) {
            console.log('set', key)
            const ret = Reflect.set(target, key, value)
            // 需要变化之后再更新【这里update容易耦合】
            // update()
            // effects.forEach(fn=>fn())
            trigger(target, key)
            return ret
        }
    })
}

// 临时存储更新函数
const effectStack = []
function effect(fn) {
    const eff = function () {
        try {
            effectStack.push(fn)
            fn()
        } finally {
            effectStack.pop()
            console.log('执行了')
        }
    }
    eff()
    return eff
}

// 建立 target、key和effect之间的映射关系,如果有多个更新操作就也可以按照这种方式来
const targetMap = {}
// 跟踪、依赖关系的建立
function track(target, key) {
    // 取出临时保存的数组
    const effect = effectStack[effectStack.length - 1]
    // debugger
    if (effect) {
        // 首次取不到
        let map = targetMap[target]
        if (!map) {
            map = targetMap[target] = {}
        }
        let deps = map[key]
        if (!deps) {
            deps = map[key] = []
        }
        if (deps.indexOf(effect) === -1) {
            deps.push(effect)
        }
    }
}

// 触发
function trigger(target, key) {
    const map = targetMap[target]
    // cons
    if (map) {
        const deps = map[key]
        if (deps) {
            deps.forEach(dep => dep())
        }
    }
}

// 实现数据的拦截
// const o = reactive({
//     foo: 'foo'
// })
// o.foo;
// o.foo = 'fooooooo'

/*MVVM为什么需要响应式,没有响应式，
获取节点需要get节点先，再操作节点，更新视图，需要dom操作
监听事件又需要操作dom，所以数据驱动，减少很多代码量提升了开发效率
*/