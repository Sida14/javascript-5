
let numbers = Array.from({ length: 10 }, (_, index) => index + 1);

console.log("Even numbers in the array:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
let numbersss = Array.from({ length: 10 }, (_, index) => index + 1);
let totalSum = 0;
for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}
console.log("Sum of all numbers in the array:", totalSum);


