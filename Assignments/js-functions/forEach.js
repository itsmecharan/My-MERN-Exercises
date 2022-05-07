let fruits = ["apple", "orange", "cherry"];

myFunction =(item,idx) =>{
    console.log(`${idx} : ${item}`);
}

fruits.forEach(myFunction);

let numbers = [65, 44, 12, 4];
let sum=0;
let add=(item) =>{
  sum += item;
  console.log(sum);
}
numbers.forEach(add);

