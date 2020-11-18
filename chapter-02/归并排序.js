let array = []
let int = 0
for (let i = 0; i < 10; i++) {
  int = Math.ceil(Math.random() * 100)
  array.push(int)
}
console.log('原始数组', array)

function mergeSort(arr) {
  let len = arr.length
  if (len < 2) return arr
  let middle = Math.floor(len / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  let i = 0
  let j = 0
  while ((i <= left.length - 1) && (j <= right.length - 1)) {
    if (left[i] <= right[j]) {
      result.push(left[i])
      i = i + 1
    } else {
      result.push(right[j])
      j = j + 1
    }
  }
  while (i <= left.length - 1) {
    result.push(left[i])
    i = i + 1
  }
  while (j <= right.length - 1) {
    result.push(right[j])
    j = j + 1
  }
  return result
}

console.log('排序后数组', mergeSort(array))