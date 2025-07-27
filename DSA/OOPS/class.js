// // class Car{
// //     sound(){
// //         console.log("Car make sound");

// //     }
// //     park(){
// //         console.log("Car Park Automatically");

// //     }
// // }

// // let color=["red","Yelloaw","blue","green"]

// // let car=new Car()
// // Car.prototype.sound=()=>{console.log("Hello from sound prototype")}
// // Car.prototype.park=()=>{console.log (color.join('>')); return color}
// // car.park()
// // car.sound()
// // Car.prototype.apple="Hello world"

// // console.log(car.apple)

// // class Car{

// //     constructor(num1,num2){
// // this.num1=num1
// // this.num2=num2;
// //     }

// // // store(){
// // //     console.log(this.brand," From store")
// // // }

// // add(){
// //  return this.num1+this.num2
// // }
// // sub(){
// //  return this.num1-this.num2
// // }
// // mul(){
// //  return this.num1*this.num2
// // }
// // div(){
// //  return this.num1/this.num2
// // }

// // }

// // const car=new Car(1,4)

// // console.log("Addition :",car.add());

// // console.log("Subraction :",car.sub());

// // console.log("Multiplication :",car.mul());

// // console.log("Division :",car.div());

// // const car1=new Car(10,90)

// // console.log("Addition :",car1.add());

// // console.log("Subraction :",car1.sub());

// // console.log("Multiplication :",car1.mul());

// // console.log("Division :",car1.div());

// class Parent {
//   constructor(name) {
//     console.log("Hello to Child from constructor");
//     this.name = name;
//   }
//   // hello(){
//   //     console.log("Hello from parent class",this.name);

//   // }
// }

// class Child extends Parent {
//   constructor(age) {
//     super();
//     console.log("Hello to sub_child from constructor");
//     this.age = age;
//   }
//   bye() {
//     console.log("Bye from child class", this.age);
//   }
// }

// class sub_child extends Child {}

// const child = new Child("Ullas");
// // child.hello()
// child.bye();
// const sub = new sub_child();
// sub;
//
// class Encap{
//
//     #balance=0;
//
//     setBalance(balance){
// return this.#balance+=balance
//     }
//
//     getBalance(){
//         return this.#balance
//     }
// }
//
// class sub_Encap extends Encap{
//
//
// }
//
// const sub=new sub_Encap
// sub.setBalance(100)
// sub.setBalance(100)
// sub.setBalance(100)
// sub.setBalance(100)
// console.log(sub.getBalance())

console.log('Hello')
console.log('Hello git')
console.log('Hello git dev')
console.log('Hello git dev')