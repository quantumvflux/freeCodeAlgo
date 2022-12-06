function confirmEnding(str, target) {
  let targetToCharNum = target.split("").length;
  console.log(
    str.substring(str.split("").length - targetToCharNum) == target
      ? true
      : false
  );
}

confirmEnding("Bastian", "n");
