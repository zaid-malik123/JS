// interfce ka matlab hai agar tumhe apne data ke shape pta hai kaise aane wala hai to uska tum interfase create karlo

// interface Chai {
//     name: string,
//     price: number
// }

// const chai: Chai = {
//     name: "Masala Chia",
//     price: 12
// }


// interface ChaiDiscount  {
//     (price: number): number
// }

// const apply50: ChaiDiscount = (p) => p * 0.5;

// interface methods {

//     (greet: string) : string;

//     (n1: number, n2: number) : number;
// }

// interface Greet  { greet: (name: string) => string }

// const User: Greet = {
//     greet: (name) => {  
//         return name;
//     }
// }

// console.log(User.greet("zaid"))



// interface Product {
//     name: string,
//     description: string,
//     price: number
// }

// const products: Product[] = [
//     {
//         name: "product1",
//         description: "description1",
//         price: 12
//     },

//     {
//         name: "product1",
//         description: "description1",
//         price: 12
//     },
// ]

// const UserA = {
//     city: string,
//     state: string
// }

// const User = {

//     name: string,
//     age: number,
//     address: UserA
// }

// Ques 1:-
// interface User {
//     readonly id: number,
//     name: string,
//     isActive? : boolean
// }

// const users: User[] = [
//     {
//         id: 1,
//         name: "zaid",
//         isActive: true
//     },
//     {
//         id: 2,
//         name: "Jhon",
//     },
// ]

// Ques 2:-

// interface Calculator {
//     add: (n1: number, n2: number) => number,
//     subtract: (n1: number, n2: number) => number,
// }

// const cal: Calculator = {

//     add: (n1, n2) => {
//         return n1 + n2;
//     },
//     subtract: (n1, n2) => {
//         return n1 - n2;
//     },
// }

// const ans = cal.add(2, 3)
// console.log(ans)

// const ansSub = cal.subtract(3, 1)
// console.log(ansSub)

// Ques 3:-

// interface ApiData {
//     readonly id: number,
//     title: string,
//     price: number,
    
// }

// const products: ApiData[] = [
//     { id: 1, title: "Book", price: 200 },
//     { id: 2, title: "Pen", price: 20 }
// ]

// Ques 4 :- 


// interface Address {
//     city: string,
//     pincode: number
// }

// interface UserDetails {
//     readonly id: number,
//     name: string,
//     address: Address
// }



// const U: UserDetails = {
//   id: 1,
//   name: "Zaid",
//   address: {
//     city: "Delhi",
//     pincode: 12345
//   }
// }

// Ques 5 :-

