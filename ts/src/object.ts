// interface ApiRes {
//   success: boolean;
//   message: string;
// }

// function apiResponse( data : ApiRes): ApiRes {
//   if (data.success) {
//     return {
//       success: data.success,
//       message: data.message,
//     };
//   } else {
//     return {
//       success: false,
//       message: "something went wrong",
//     };
//   }
// }

// const data = apiResponse({
//   success: true,
//   message: "User created"
// })

// console.log(data)

// 🟢 PROBLEM 2 (Easy – User System)

// 👉 Ek User type bana:

// name (string)
// age (number)
// role ("admin" | "user")

// 👉 Function likh:

// isAdmin(user)
// return true/false

// interface User {
//   name: string;
//   age: number;
//   role: "admin" | "user";
// }

// function isAdmin (user: User): boolean {

//     if(user.role == "admin") {
//       return true;
//     }

//     else {
//       return false;
//     }

// }

// isAdmin({
//   name: "zaid",
//   age: 20,
//   role: "admin"
// })

// 🟡 PROBLEM 3 (Medium – Product Filter)

// 👉 Products ka array hai:

// [
//   { name: "iPhone", price: 1000 },
//   { name: "Shoes", price: 100 }
// ]

// 👉 Task:

// Type define kar
// Function getExpensiveProducts(products, minPrice)
// sirf wo products return kare jinka price > minPrice

// interface Product {
//   name: string;
//   price: number;
// }

// const products: Product[] = [
//   { name: "iPhone", price: 1000 },
//   { name: "Shoes", price: 100 },
//   { name: "macbook", price: 500 },
//   { name: "airPords", price: 400 },
//   { name: "belt", price: 50 },
//   { name: "chairs", price: 300 },
// ];

// function getExpensiveProducts(product: Product[], minPrice: number): Product[] {

//   const products = product.filter(product => product.price > minPrice)

//   return products;

// }


// const newProducts = getExpensiveProducts(products, 500)

// console.log(newProducts)

// 🟡 PROBLEM 4 (Medium – Generic Function)

// 👉 Ek reusable function likh:

// name: wrapInArray
// input: koi bhi type
// output: array of that type

// 👉 Example:

// wrapInArray(5) → [5]
// wrapInArray("hi") → ["hi"]

// function wrapInArray<T>(value: T): T[] {

//   return [value]

// }

// const data = wrapInArray(1)
// console.log(data)


// type User = {
//     userDetails: {
//         name: string;
//         age: number;
//         address: {
//             location: string;
//         }
//     }
// }

// function createUser(user: User): User {
//     return user
// }

// const user = createUser({
//     userDetails: {
//         name: "zaid",
//         age: 20,
//         address: {
//             location: "sre"
//         }
        
//     }
// })
// console.log(user)


// const User: User = {
//    userDetails: {
//         name: "zaid",
//         age: 20,
//         address: {
//             location: "sre"
//         }
//     }
// }

// async function getName(val: string): Promise<string> {

//     return val;

// }
