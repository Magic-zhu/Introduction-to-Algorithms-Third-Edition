function findMaxCrossingSubarray(left, right) {
    const L = left.length
    const R = right.length
    let sum = left[L - 1]
    let leftSum = left[L - 1], rightSum = right[0]
    let maxLeft = left[L - 1]
    let maxRight = right[0]
    for (let i = L - 2; i >= 0; i--) {
        sum = left[i] + sum
        if (leftSum < sum) {
            leftSum = sum
            maxLeft = i
        }
    }
    sum = right[0]
    for (let j = 1; j < R; j++) {
        sum = right[j] + sum
        if (rightSum < sum) {
            rightSum = sum
            maxRight = j
        }
    }
    return [left.slice(maxLeft, L).concat(right.slice(0, maxRight)), leftSum + rightSum]
}

function findMaxSubarray(arr) {
    let newArr = [...arr]
    let len = newArr.length
    if (len < 2) return [newArr, newArr[0]]
    let middle = Math.floor(len / 2)
    let left = newArr.slice(0, middle)
    let right = newArr.slice(middle, len)
    let [leftArr, leftSum] = findMaxSubarray(left)
    let [rightArr, rightSum] = findMaxSubarray(right)
    let [crossArr, crossSum] = findMaxCrossingSubarray(left, right)
    if (leftSum >= rightSum && leftSum >= crossSum) {
        return [leftArr, leftSum]
    } else if (rightSum >= leftSum && rightSum >= crossSum) {
        return [rightArr, rightSum]
    } else {
        return [crossArr, crossSum]
    }
}
let input = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, -12, -5, -22, 15, -4, 7]
// let input = [13,-3]
console.log(findMaxSubarray(input))
// module.exports = findMaxSubarray