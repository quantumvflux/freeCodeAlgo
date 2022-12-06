function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  console.log(newStr);
}

repeatStringNumTimes("abc", 3);
