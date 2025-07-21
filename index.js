const surname="NAKUM"
const name="KARTIK"
console.log(name)
console.log(surname)


// 1. Check Even or Odd
// Definition: Determine if a number is even or odd.
// Input: 7
// Output: Odd

let num = 7
if(num % 2 == 0){
    console.log("number is even")
}else{
    console.log("number is odd")
}

// 2. Find the Maximum of Two Numbers
// Definition: Given two numbers, print the larger one.
// Input: 5 9
// Output: 9
const a = 5
const b = 7

if (a>b){
    console.log("a is max")
}else{
    console.log("b is min")
}

//3. Check Leap Year
// Definition: Check if a given year is a leap year.
// Input: 2020
// Output: Leap Year
const year = 2020

if (year % 4 == 0){
    console.log(year+"year is leap")
}else{
    console.log(`${year}year is no leap`)
}

// 4. Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.
// Input: 5
// Output: 15
let n=5
let sum=0
for(let i=0;i<=n;i++)
   sum+=i
{
    console.log(`sum of first ${n}natural number is ${num}`)
}

// 5. Factorial of a Number
// Definition: Calculate factorial of a number.
// Input: 4
// Output: 24
let n1=9
let result=1
for(let i=1;i<=n1;i++)
{
  result*=i
}
console.log(result)

//6. Print Multiplication Table
// Definition: Display multiplication table of a number up to 10.
// Input: 3
// Output: 3 x 1 = 3
// ...
// 3 x 10 = 30

let number=3
let rows=10
for(let i=1;i<=rows;i++)
{
    console.log(number +"x"+i+"="+(number*i))
}

//7. Reverse a Number
// Definition: Reverse the digits of a number.
// Input: 1234
// Output: 4321
let n3=1234
let result1=n3.toString().split('').reverse().join()
console.log(result1)

//8. Palindrome Check (Number)
// Definition: Check if a number reads the same backward.
// Input: 121
// Output: Palindrome
let num1=121
let rev=num1.toString().split('').reverse().join('')
if(num1 == rev)
{
    console.log(`${num1} is palindrome`)
}else{
    console.log(`${num1} is not palindrome`)
}

//9. Check Prime Number
// Definition: Check whether the input number is prime.
// Input: 11
// Output: Prime

let num4=11
let prime=num4>1
  
for(let i=2;i<num4;i++){
    if(num4%i==0){
        prime=false
        break
    }
}
console.log(prime?"prime":"not prime")

//10. Count Digits in a Number
// Definition: Count how many digits a number contains.
// Input: 5023
// Output: 4
let num5 = 5023;
console.log(num5.toString().length);


//11. Sum of Digits
// Definition: Calculate the sum of all digits in a number.
// Input: 123
// Output: 6

let num8 = 123;
let sum8 = num8.toString().split('').reduce((a, b) => a + +b, 0);
console.log(sum8);

// 12. Check Armstrong Number
// Definition: Check if the number is equal to the sum of its digits each raised to the power of 
// the number of digits.
// Input: 153
// Output: Armstrong

let numm = 153;
let strNum = numm.toString();
let len = strNum.length;
let summ = 0;

for (let char of strNum) {
  summ += Math.pow(Number(char), len);
}

if (summ === numm) {
  console.log("Armstrong");
} else {
  console.log("Not Armstrong");
}


// 13. Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.
// Input: 5
// Output: 0 1 1 2 3

let g=5
let first=0
let second=1
console.log(0);
console.log(1);
for(let i=2; i<g; i++){
    sum=first+second
    first=second
    second=sum
    console.log(" "+sum);
}
