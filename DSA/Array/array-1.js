const propmt=require('prompt-sync')();
// let a = [1]
// a.push(100)
// a.push(100)
// a.push(false)
// a.push(100)
// a.push(100)
// a.push("ali")

// a[0]=true
// a.pop()
// console.log(a)

// let b=10;
// let c=120;

// let arr=new Array(3);
// arr[4]=10
// console.log(arr)

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;

//     for (let i = 3 ; i <= Math.floor(Math.sqrt(n)) ; i += 2) {
//         if (n % i === 0) return false;

//     }
//     return true

// }

// console.log(isPrime(19))

// let arr=[]
// let n=Number(propmt("Enter the number of array element"))
// for(let i=0;i<n;i++){
//     sum+=i
//     arr[i]=Number(propmt(`Enter ${i} element :`))
// }
// console.log(sum)
// console.log(arr)

// let arr=[10,40,53,20,103,1,45,0];
// let max=arr[0]
// for (let i = 0 ; i < arr.length ; i++) {
//     if(max<arr[i]){
//      max=arr[i];
//     }
// }
// console.log(max)

// let arr=[10,40,53,20,103,1,108,110,70,65,110,45,60,109];
// let max=Math.max(arr[0],arr[1]);
// let smax=Math.min(arr[0],arr[1]);

// for (let i = 2 ; i < arr.length ; i++) {
//   if(arr[i]>max){
//       smax=max
//       max=arr[i];
//   }
//   else if(smax<arr[i] && max !==arr[i] ){
//       smax=arr[i];
//   }
// }
// console.log(max, smax)

// let arr=[1,2,3,4,5,7,10,90,11]
// let new_arr=[]
// let j=0;
// for (let i = arr.length-1 ; i >j ; i--) {
//    let temp= arr[j];
//     arr[j]=arr[i];
//     arr[i]=temp;
//     j++;
// }
// let left=0;
// let right=arr.length-1
// while(left!==right){
//     let temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp
//     left ++
//     right --
// }
//
// console.log(arr)

// let arr=[1,1,0,1,0,1,1,0,0];
let arr=[-1,-2,2,3,-1,-4,8,9,0]
let i=0;
let j=0;

while (i<arr.length){
    if(arr[i]<=0){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j++;
    }
    i++;
}
console.log(arr)

















