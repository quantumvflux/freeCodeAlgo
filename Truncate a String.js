function truncateString(str, num) {
  let toArray = str.split("");
  return toArray.length > num ? str.substring(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
