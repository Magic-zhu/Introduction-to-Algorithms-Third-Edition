var array = [];
var int = 0;
for (var i = 0; i < 10; i++) {
  int = Math.ceil(Math.random() * 10);
  array.push(int);
}

function InsertionSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]
      i = i - 1
    }
    arr[i + 1] = key
  }
  return arr
}

console.log(InsertionSort(array))
