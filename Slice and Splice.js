function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice();
  arr.splice(n, 0, ...arr1);
  console.log(arr);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
