function myNew(foo, ...args) {
  // 创建一个空的对象,将实例化对象的原型指向构造函数的原型对象
  // let obj = Object.create(foo.prototype); 或者下面
  let obj = {};
  obj.__proto__ = foo.prototype;
  // 将构造函数的this指向实例化对象
  let res = foo.apply(obj, args);
  //判断返回值
  return Object.prototype.toString.call(res) === "[object,object]" ? res : obj;
}
