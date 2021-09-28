function curry (fn,len=fn.length){
  return _curry.call(this,fn,len)
}
function _curry(fn,len,...args){
  return function(...params){
    let _args = [...args,...params]
    if( _args.length >= len){
      return fn.apply(this,_args)
    }else{
      return _curry.call(this,fn,len,..._args)
    }
  }
}
let fn = curry(function(a,b,c,d,e){
  console.log(a,b,c,d,e);
})
fn(1,2,3,4,5)
fn(1)(2,3,4,5)
fn(1,2)(3),(4,5)
fn(1)(2)(3)(4)(5)