function quickSort(sortArray, begin, end) {
  console.log('quicksort', begin, end)
  if (begin < end) {
    var key = sortArray[begin];
    var i = begin;
    var j = end;
    while (i < j) {
      while (i < j && sortArray[j] > key) {
        j--;
      }
      sortArray[i] = sortArray[j];
      while (i < j && sortArray[i] < key) {
        i++;
      }
      sortArray[j] = sortArray[i];
    }

    sortArray[i] = key;
    quickSort(sortArray, begin, i - 1);
    quickSort(sortArray, i + 1, end);
    return sortArray
  }


}
var sortArray = [49, 38, 65, 97, 76, 13, 27];
var begin = 0;
var end = sortArray.length - 1;
var result = quickSort(sortArray, begin, end);
console.log(result)

