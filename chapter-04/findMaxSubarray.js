function findMaxCrossingSubarray(left, right) {
    const L = left.length
    const R = right.length
    let sum = left[L - 1]
    let leftSum = left[L - 1], rightSum = right[0]
    let maxLeft = L-1
    let maxRight = 0
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
    return [left.slice(maxLeft, L).concat(right.slice(0, maxRight + 1)), leftSum + rightSum]
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
module.exports = findMaxSubarray