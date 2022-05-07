// program to check if a number is prime or not

// take input from the user
// const readline =require("readline");
// const r1=readline.createInterface({input:process.stdin,output:process.stdout});

const number=15;
let isPrime = true;


if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (number > 1) {

    
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}


else {
    console.log("The number is not a prime number.");
}