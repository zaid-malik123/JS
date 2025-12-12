// const user = {

//     name: "zaid",
//     age: 20,
//     isAdmin: true,
// }
// user.greet = function() {
//     console.log("Hello World");
// }
// console.log(user)
// // for (let key in user){
// //     console.log(user[key]);
// // } 
// // for(let key in user){
// //     console.log(key, ":", user[key])
// // }

// // // user.key :- ye nhi chalega kyuki key variable hai or user object me koi key 'key' nahi hai
// // // user["key"] :- ye bhi nhi chalega kyuki user object me koi key 'key' nahi hai

// // // user[key] :- ye chalega kyuki key variable hai or usme user object ki keys ki values aayengi ek ek karke loop me

// // // Destructuring
// //  const { name, age } = user; // object destructuring

// //  console.log(name , age);

// //  // Array Destructuring
// //  const arr = [1,2,3,4,5];;

// //  const [first, second] = arr;
// //  console.log(first, second)

// //  // Array destructuring or object destucturing me sirf itna hi farq hai jab ham value nikalte hai to hame object me {} use karna padta hai or jo object ke andar name hai vo hame same dena padta hai .
// //  // jabki array me hame [] use karna padta hai or array me hame same name dene ki jarurat nahi hai or ham koi bhi name de sakte hai.
// //  // object destructuring me order ka koi farq nahi padta hai lekin array destructuring me order ka farq padta hai.


// // forEach loop

// // const arr = [1, 2, 3, 4, 5];

// // arr.forEach((elem, idx)=> {
// //   console.log(elem, idx)
// // })


// // filter method

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newArr  = arr.filter((elem) => {
// //     return elem > 5;
// // })
// // console.log(newArr)


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// arr.mapping = function(callback){
// const arr2 = []

// for(let num of this){
//     arr2.push(callback(num));
// }
// }


// arr.mapping((elem) => elem + 10);

// // const newArr = arr.map((elem) => {
// //    return elem + 10
// // })
// // console.log(newArr)

// // arr.filtering = function(callback) {
// //   const ans  = [];

// //   for(let num of this){
// //     if(callback(num)){
// //         ans.push(num);
// //     }

// //   }
// //   return ans;
// // }

// // const newArr  = arr.filtering((elem) => {
// //     return elem > 5;
// // })
// // console.log(newArr)

// Set :- set ek tarah ka collection hota hai jisme duplicate values nahi hoti hai or set me values kisi bhi order me ho sakti hai.

// const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(2); // duplicate value, will not be added
// mySet.add(3);

// console.log(mySet); // Output: Set { 1, 2, 3 }

// mySet.delete(2); // delete value 2

// console.log(mySet.has(2)); // Output: false
// console.log(mySet.has(3)); // Output: true

// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10];

// const arr2 = arr
// console.log(arr2) 

// const arr1 = [2, 5, 1, 4];

// const arr2 = {...arr1}
// console.log(arr2)

// map :- map ek tarah ka collection hota hai jisme key value pair store hota hai. map me keys kisi bhi type ki ho sakti hai jaise ki object, array, function etc.

// const m1 = new Map();
// m1.set('name', 'zaid');
// m1.set('age', 20);
// m1.set('isAdmin', true);
// m1.set(1, 'one');


// console.log(m1);

// const newElem = document.createElement("h1")
// const div = document.querySelector(".zaid")
// const body = document.body
// newElem.textContent = "Hello World"
// newElem.id = "heading"
// div.appendChild(newElem)
// console.log(newElem)

const lightBtn = document.querySelector(".light-btn")
const darkBtn = document.querySelector(".dark-btn")

const main = document.querySelector(".main")

lightBtn.addEventListener("click", () => {
    main.classList.remove("dark")
    main.classList.add("light")
})

darkBtn.addEventListener("click", () => {
    main.classList.remove("light")
    main.classList.add("dark")
})

// const item = ["Milk", "Eggs", "Bread", "Butter"]

// const ul = document.querySelector(".ul")

// item.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item
//     li.style.fontSize = "20px"
//     ul.appendChild(li);
// })

// const parent = document.querySelector(".parent")
// const array = [...parent.children]

// array.forEach((elem, idx) => {
//     elem.addEventListener("click", () => {
//         alert(`You clicked on child ${idx + 1}`)
//     })
    
// });