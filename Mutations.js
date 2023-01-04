function mutation(arr) {
  arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

mutation(["hello", "hey"]);
