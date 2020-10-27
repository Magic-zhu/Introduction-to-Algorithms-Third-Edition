var array = [];
var int = 0;
for (var i = 0; i < 1000; i++) {
  int = Math.ceil(Math.random() * 1000);
  array.push(int);
}

console.log(array)

function InsertionSort(arr) {
  for (let j = 1; j < arr.length-1; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] < key) {
      arr[i + 1] = arr[i]
      i = i - 1
    }
    arr[i + 1] = key
  }
  return arr
}

console.log(InsertionSort(array))
