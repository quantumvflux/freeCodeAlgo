// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  console.log(Math.max(...str.split(" ").map((word) => word.length)));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
