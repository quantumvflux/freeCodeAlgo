function findElement(arr, func) {
  let num = 0;
  arr.filter((num) => func(num));
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// the function receives two arguments
// the arr argument is the array

// the func argument is a function that, evaluated in an element, should return a boolean value

// if no element returns "true", then the function should return undefined
// else, the func should return the first element returning true
