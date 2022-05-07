let numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));

let nums = [65, 44, 12, 4];
let newarray = nums.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newarray);