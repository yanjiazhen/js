Function.prototype.mybind = function (thisArg, ...args) {
  var self = this
  var fbound = function () {
    self.apply(this instanceof self ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)))
  }
  fbound.prototype = Object.create(self.prototype);
  return fbound
}

Function.prototype._bind = function(context, ...params) {
  
  let _this = this; // this: 要处理的函数
  return function anonymous (...args) {
    // args： 可能传递的事件对象等信息 [MouseEvent]
    // this：匿名函数中的this是由当初绑定的位置 触发决定的 （总之不是要处理的函数func）
    // 所以需要_bind函数 刚进来时，保存要处理的函数 _this = this
    _this.call(context, ...params.concat(args));
  }
}