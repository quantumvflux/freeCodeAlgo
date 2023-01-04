function getIndexToIns(arr, num) {
  let sorted = arr.filter((item) => num > item).length;
  console.log(sorted);
}

getIndexToIns([40, 60], 50);
