var array = [];
var int = 0;
for (var i = 0; i < 10; i++) {
  int = Math.ceil(Math.random() * 10);
  array.push(int);
}
console.log(array)
function Merge(arr, p, q, r) {
  let left = arr.slice(p, q + 1)
  let right = arr.slice(q, r)
  left.push(Number.POSITIVE_INFINITY)
  right.push(Number.POSITIVE_INFINITY)
}

function MergeSort(arr) {

}

function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  console.log(result)
  return result;
}
console.log(mergeSort(array), '结果')