const surname="NAKUM"
const name="KARTIK"
console.log(name)
console.log(surname)


//1
let num = 7
if(num % 2 == 0){
    console.log("number is even")
}else{
    console.log("number is odd")
}

//2
const a = 5
const b = 7

if (a>b){
    console.log("a is max")
}else{
    console.log("b is min")
}

//3
const year = 2020

if (year % 4 == 0){
    console.log(year+"year is leap")
}else{
    console.log(`${year}year is no leap`)
}

//4
let n=5
let sum=0
for(let i=0;i<=n;i++)
   sum+=i
{
    console.log(`sum of first ${n}natural number is ${num}`)
}

//5
let n1=9
let result=1
for(let i=1;i<=n1;i++)
{
  result*=i
}
console.log(result)

//6
let number=3
let rows=10
for(let i=1;i<=rows;i++)
{
    console.log(number +"x"+i+"="+(number*i))
}

//7
let n3=1234
let result1=n3.toString().split('').reverse().join()
console.log(result1)

//8
let num1=121
let rev=num1.toString().split('').reverse().join('')
if(num1 == rev)
{
    console.log(`${num1} is palindrome`)
}else{
    console.log(`${num1} is not palindrome`)
}

//9
