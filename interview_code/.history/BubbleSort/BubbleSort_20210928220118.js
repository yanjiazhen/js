/* 冒泡排序 */
let arr = [1,3,4,5,6,7,8,11,2]
// function bs(arr){
//   for(var i=0;i<= arr.length-1;i++){
//     for(var j = 0; j<= arr.length-1-i;j++){
//       if(arr[j]> arr[j+1]){
//         arr[j] = arr[j] - arr[j+1];
//         arr[j+1] = arr[j] + arr[j+1];
//         arr[j] = arr[j+1] - arr[j]
        
//       }
//     }
//   }
//   console.log(arr);
// }
// bs(arr)

function bertterBS(arr){
  for(let i = 0;i<=arr.length-1;i++){
    let flag= true;
    for(let j = 0;j<=arr.length - i - 1;j++){
      if(arr[j]>arr[j+1]){
        flag = false;
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp
      }
    }
    if(flag)break
  }
  console.log(arr);
}
bertterBS(arr)