function quickSort(arr){
  if(arr.length<1)return arr
  const middle = arr.length/2 | 0;
  const middleValue = arr.splice(middle, 1)[0];
  let leftArr= [];
  let rightArr = [];
  arr.forEach(val => {
    val > middleValue ? rightArr.push(val) : leftArr.push(val)
  });
  return [...quickSort(leftArr),middleValue,...quickSort(rightArr)]
}


function betterQS(arr,left,right){//这个left和right代表分区后“新数组”的区间下标，因为这里没有新开数组，所以需要left/right来确认新数组的位置
  if(left<right){
    let pos = left -1; //pos即“被置换的位置”，第一趟为-1
    for(let i=left;i<=right;i++){ //循环遍历数组，置换元素
      let pivot = arr[right]  //选取数组最后一位作为基准数，
      if(arr[i] <= pivot) { //若小于等于基准数，pos++，并置换元素, 这里使用小于等于而不是小于, 其实是为了避免因为重复数据而进入死循环
        pos++
        let temp = arr[pos]
        arr[pos] = arr[i]
        arr[i] = temp
      }   
    }
    quickSort(arr, left, pos - 1)        
    quickSort(arr, pos + 1, right)
  }
  return arr  
}