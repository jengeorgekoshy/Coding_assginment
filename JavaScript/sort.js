// Task 2-B
// Perform sorting of an array in descending order.

let arr = [3, 6, 8, 1, 9, 5]
let l = arr.length
let i, j, temp
for (i = 0; i < l; i++) {
  for (j = i + 1; j < l; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}
arr.forEach(function (element) {
  console.log(element)
})
