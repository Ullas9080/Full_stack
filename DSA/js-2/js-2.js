// let ans=Number(prompt("Please enter your age"));

// if (ans>=18) {
//     console.log("You eligible to vote");

// }else{
//     console.log("No u cant vote");

// }
// console.log(isNaN(ans))

// let amount = Number(prompt("What is the final amount ?"));

// if (amount>0 && amount <= 5000) console.log(`No discount for this amount : ${amount}`);
// else if(amount >= 5001 && amount <= 7000) console.log(`Discount for this amount is 5% So, final amount is :${amount - Math.round((amount-5)/100)}`)
// else if(amount > 7000 && amount <= 9000) console.log(`Discount for this amount is 10% So, final amount is :${amount - Math.round((amount-10)/100)}`)
// else if(amount > 9000) console.log(`Discount for this amount is 20% So, final amount is :${amount - Math.round((amount-20)/100)}`)
// else console.log(`Wrong input ${amount}`);

// let n=Number(prompt('Enter a number'))

// if(isNaN(n)) console.log('Invalid input ',n)
// else{
//     if(n>0){
//         let sum =0;
//         for(let i=0;i<=n;i++){
//             sum += i
//         }
//         console.log(sum);

//     }else{
//         console.log('Should be +1 or more than 0');

//     }
// }

// let n = Number(prompt("Enter a number"));

// if (isNaN(n)) {
//   console.log("Invalid input ", n);
// } else {
//   if (n > 0) {
//     let fact=1;
//     for (let i = 1; i <= n; i++) {
//         fact *=i
//     }
// console.log(fact);

//   } else {
//     console.log("Should be +1 or more than 0");
//   }
// }

// let result=[...Array.from(n,(_,i)=>i+1)].reduce((a,b)=>{
//     return a*b;
// })

// console.log(result);

// if (isNaN(n)) {
//   console.log("Invalid input ", n);
// } else {
//   if (n > 0) {
// console.log(isPrime(n))
//   } else {
//     console.log("Should be +1 or more than 0");
//   }
// }

// if(isNaN(n)||n<0)console.log("Should be +1 or more than 0");

// function isPrime(n){
// if(n<=1) return false;
// if(n===2)return true;
// if(n%2===0)return false;
// for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
//     if(n%i===0){
//         return false;
//     }
// }
// return true
// }

// console.log(121%10);

// let sum=0;
// while(n>0){
//     let rem=n%10;
//     sum += rem;
//     n=Math.floor(n/10);
// }
// console.log(sum);

// let a="hello"

// let b=[...a]
// console.log(b.reverse().join(''));

// let c=[]
// for(let i=0;i<=a.length;i++){
//     let rev=a.length-i
// c.push(b[rev])
// }
// console.log(c.join(''));
// let i=0;
// while(i <= a.length){
//     let rev=a.length-i
//     c.push(b[rev])
//     i++;
// }
// console.log(c.join(''));

let n=Number(prompt('Enter a number'))
let sum = 0;
while (n > 0) {
  let rem = n % 10;
  let fact = 1;
  for (let i = 1; i <=rem; i++) {
    fact *= i;
  }
sum +=fact;
n=Math.floor(n/10)
}
console.log(sum);