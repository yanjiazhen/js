/*斐波那契？？*/ 
function fib(n,curr=0,next = 1){
  if(n == 1) return curr;
  if(n == 2) return next;
  return fib(n-1,next,curr+next)
}

console.log(fib(30));