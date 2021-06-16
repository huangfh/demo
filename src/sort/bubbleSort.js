function bubbleSort(sortArray) {
  var len = sortArray.length - 1;
  var temp = 0;
  var swap = false;//优化点：如果一趟没有交互，排序结束
  for (var i = len; i > 0; i--) {
    //swap=false;
    for (var j = 0; j < i; j++) {
      //相邻元素交换位置
      if (sortArray[j] > sortArray[j + 1]) {
        temp = sortArray[j];
        sortArray[j] = sortArray[j + 1];
        sortArray[j + 1] = temp;
        swap = true;
      }
    }
    if (swap === false) {
      return sortArray
    }
  }
  return sortArray;
}

var sortArray = [49, 38, 65, 97, 76, 13, 27];
var result = bubbleSort(sortArray);
console.log(result)