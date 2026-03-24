"use strict";
// THIS IS THE TYPE NARROWING
Object.defineProperty(exports, "__esModule", { value: true });
// function getVal (val: string | number) {
//     if(typeof val === "string") {
//         return `THIS IS THE STRING`
//     }
//     else {
//         return `THIS IS THE NUMBER`
//     }
// }
// getVal("zaid")
// function serveChai(msg?: string) {
//     if(msg) {
//         return `YOUR MESSAGE IS ${msg}`
//     }
//     return `YOU ARE NOT SENDING ANY MESSAGE`
// }
// serveChai()
// function printValue(value: string | number) {
//   if(typeof value === "string") {
//     return value.toUpperCase()
//   }
//   else {
//     value += 100;
//   }
// }
// printValue("zaid") 
// printValue(10) 
// function greet(name: string | null) {
//     if(name) {
//         return `HELLO ${name}`
//     }
//     return `No name provided`
// }
// type Dog = { bark: () => void };
// type Cat = { meow: () => void };
// function makeSound(animal: Dog | Cat) {
//     if("bark" in animal) {
//         animal.bark()
//     }
//     else {
//         animal.meow();
//     }
// }
// class Car {
//   drive() {
//     console.log("driving...");
//   }
// }
// class Bike {
//   ride() {
//     console.log("riding...");
//   }
// }
// function move(vehicle: Car | Bike) {
//   if(vehicle instanceof Car) {
//     vehicle.drive()
//   }
//   else {
//     vehicle.ride()
//   }
// }
// https://github.com/zaid-malik123
// type User = {
//   name: string;
// };
// type Admin = {
//   name: string;
//   role: string;
// };
// function isAdmin(user: User | Admin): user is Admin {
//   return "role" in user;
// }
// function checkUserAdmin(user: User | Admin) {
//   if (isAdmin(user)) {
//     console.log("Admin hai:", user.role);
//   } else {
//     console.log("Normal user:", user.name);
//   }
// }
// checkUserAdmin({name: "zaid", role: "admin"})
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// function move(animal: Fish | Bird) {
//     if("swim" in animal) {
//         animal.swim()
//     }
//     else {
//         animal.fly()
//     }
// }
// type Car = { drive: () => void };
// type Plane = { fly: () => void };
// // create isPlane()
// function isPlane(ride: Car | Plane): ride is Plane {
//     return true;
// }
// // then use in function travel()
// function travel(ride: Car | Plane) {
//     if(isPlane(ride)) {
//         ride.fly()
//     }
//     else {
//         ride.drive()
//     }
// }
// const name = {
//     name: "zaid malik",
// }
// console.log("name" in name)
// type Response =
//   | { status: "success"; data: string }
//   | { status: "error"; error: string };
// function handleResponse(res: Response) {
//   if(res.status === "success") {
//     return {
//         status: res.status,
//         data: res.data
//     }
//   }
//   else {
//     return {
//         status: "error", 
//         error: "fetched data mistake "
//     }
//   }
// }
// const data = handleResponse({status: "success", data: "data aaya"})
// console.log(data)
// type Dog = { bark: () => void };
// type Cat = { meow: () => void };
// function check(animal: Dog | Cat) {
//   if ("bark" in animal) {
//     animal.bark();
//   } else {
//     animal.bark(); // 🤯 yaha error kyu? because hame bark ke already check kar liya ab yja confirm hia bark nhi ho sakta 
//   }
// }
// type Shape =
//   | { type: "circle"; radius: number }
//   | { type: "square"; side: number };
// function getArea(shape: Shape) {
//     if(shape.type == "circle") {
//         return 3.14 * shape.radius * shape.radius
//     }
//     else {
//         return shape.side * shape.side;
//     }
// }
// const ans = getArea({type: "circle", radius: 12})
// console.log(ans)
// type Shape =
//   | { type: "circle"; radius: number }
//   | { type: "square"; side: number };
// function getArea(shape: Shape) {
//     if("radius" in shape) {
//         return 3.14 * shape.radius * shape.radius
//     }
//     else {
//         return shape.side * shape.side;
//     }
// }
// const ans = getArea({type: "circle", radius: 12})
// console.log(ans)
// type SuccessResponse = {
//   status: "success";
//   data: {
//     id: number;
//     name: string;
//   };
// };
// type ErrorResponse = {
//   status: "error";
//   error: string;
// };
// type LoadingResponse = {
//   status: "loading";
// };
// type ApiResponse = SuccessResponse | ErrorResponse | LoadingResponse;
// function isSuccess(res: ApiResponse): res is SuccessResponse {
//     return res.status == "success"
// }
// function isError(res: ApiResponse): res is ErrorResponse {
//     return res.status == "error"
// }
// function handleApiRes(res: ApiResponse) {
//     if(isSuccess(res)) {
//         return {
//             status: res.status,
//             data: res.data
//         }
//     }
//     if(isError(res)) {
//         return {
//             status: res.status,
//             error: res.error
//         }
//     }
//     else {
//         return {
//             status: res.status
//         }
//     }
// }
// const ans = handleApiRes({status: "success", data: {
//     id: 1,
//     name: "zaiad"
// }})
// console.log(ans)
// type Payment =
//   | { status: "pending" }
//   | { status: "completed"; amount: number }
//   | { status: "failed"; reason: string };
// function handlePayment(payment: Payment) {
//     if(payment.status == "completed") {
//         return console.log("YOUR PAYMENT STATUS IS COMPLETED AND PAYMENT IS ", payment.amount)
//     }
//     if(payment.status == "failed") {
//         return console.log("YOUR PAYMENT IS FAILED ", payment.reason)
//     }
//     else {
//         return console.log("YOUR PAYMENT IS PENDIND NOW ")
//     }
// }
// handlePayment({status: "completed", amount: 12})
//# sourceMappingURL=TypeNarrowing.js.map