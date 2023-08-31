function sum(a:number,b:number):number{
    return a+b;
}
let ans=sum(1,2);
console.log(ans);

// // types// //enum//
// // type Arithmetic= "add" | "sub" | "div" | "mul" ;
// enum Arithmetic{
//   add,
//   sub,
//   div,
//   mul
// }
// function calculate(
//   a:number, 
//   b:number, 
//   type: Arithmetic) :number
//   {
//   if(type==="add") return a+b;
//   if(type==="mul") return a*b;
//   if(type==="sub") return a-b;
//   if(type==="div") return a-b;
//   return -1;
// }
// let x= calculate(1,2,Arithmetic.mul);
// console.log(x);

//interfaces//
// interface PersonInterface{
//   name: string;
//   age: number;
//   greet(): string;
// }
// class Person implements PersonInterface{
//   name: string;
//   age: number;

//   constructor(name:string, age:number){
//     this.name=name;
//     this.age=age;
//   }
//   greet(){
//     return "Hi Mr."+ this.name;
//   }
// }
// const personObject= new Person("Vipul", 21)
// console.log(personObject.greet());

// interface PersonInterface{
//   name: string;
//   age: number;
 
// }
// interface PersonGenderProperties{
//   gender: string;
//   orientation: string;
//   pronouns: string;
// }
// interface AnimalInterface{
//   name: string;
//   furType: string;
// }
// function greet(person: PersonInterface){
//    console.log(person)
// }
// console.log(greet({
//   name: "harkirat",
//   age: 21,
//   genderProps: {
//     gender: "male",
//     orientation: "straight"
//   }
// }))

interface Circle{
    radius: number;
    borderWidth?: number;
  }
  interface Square{
    side: number;
  }
  interface Rectangle{
    width: number;
    height: number;
  }
  function render(circle:Circle){
    let width= circle.borderWidth;
    console.log(width)
  }
  render({
    radius:10,
    borderWidth:12
  })
  // type
  //unions and intersec
  type Shape= Circle | Rectangle | Square ;
  
  function renderShape(shape: Shape){
    console.log(shape.radius);
  }
  renderShape({
    radius: 10,
  })
  
  
  