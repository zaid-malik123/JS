// 'this' ki value Execution Context ki this binding par depend karti hai.

// 1. Agar Global Execution Context me 'this' use ho raha hai,
//    to uski value runtime environment par depend karti hai.
//    Browser (non-module script) -> window
//    Node.js -> global (kuch contexts, jaise CommonJS module me top-level this alag ho sakta hai)

// 2. Agar Function Execution Context me 'this' use ho raha hai,
//    to uski value function CALL hone ke time decide hoti hai.
//    Matlab function ko kis tarike se call kiya gaya hai (call-site),
//    uske hisaab se 'this' bind hota hai.

// 'this' function define hone ke time decide nahi hota.
// 'this' function CALL hone ke time decide hota hai.

// console.log(this) // window/ global ( kyuki ye global execution context me aara hai )

// function abc() {
//   console.log(this); // window / global
// }

// abc(); // window / global ( kyuki jab yha se fn ka execution context create hua uske sath kuch bhi bind nhi hai to uska value global kar diya );


// const obj1 = {
//     name: "zaid",
//     greet() {
//         console.log(this.name);
//     }
// }

// obj1.greet() // yha execution context dekhega ye obj1 ke sath call hora hai. isliye obj1 decide karega this ke value;

// const user = {
//     name: "Zaid",

//     greet() {
//         console.log(this.name);
//     }
// };

// const fn = user.greet;

// fn();

// const user1 = {
//     name: "Zaid",

//     show() {
//         console.log(this.name);
//     }
// };

// const user2 = {
//     name: "Ali",
//     show: user1.show
// };

// user2.show();