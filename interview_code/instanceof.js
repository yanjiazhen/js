// 手动实现instanceOf
// 步骤1： 先取得当前类的原型，当前实例对象的原型链
// 步骤2： 一直循环（执行原型链的查找机制）
// 取得当前实例对象原型链的原型链（proto = proto.__proto__，沿着原型链一直向上查找）
// 如果 当前实例的原型链__proto__上找到了当前类的原型prototype，则返回true
// 如果 一直找到Object.prototype.__proto__ == null，Object的基类(null)上面都没找到，则返回 false


function _instanceof(instanceObject, classFunc) {
    classFunc = classFunc.prototype; // 取得当前类的原型
    proto = instanceObject.__proto__; // 取得当前实例对象的原型链

    while (true) {
        if (proto === null) { // 找到了 Object的基类 Object.prototype.__proto__
            return false;
        };
        if (proto === classFunc) { // 在当前实例对象的原型链上，找到了当前类
            return true;
        }
        proto = proto.__proto__; // 沿着原型链__ptoto__一层一层向上查找
    }
}

let aa = []
_instanceof(aa, Array)