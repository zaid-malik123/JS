// class Car {
//     brand: string;
//     speed: number;

//     constructor(brand: string, speed: number) {
//         this.brand = brand
//         this.speed = speed
//     }

//     accelarate(amount: number) {
//         this.speed += amount
//     }
// }

// const bmw = new Car("BMW", 1200)
// console.log(bmw)
// bmw.accelarate(50)
// console.log(bmw)

// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name,
//         this.age = age
//     }

//     sayHii() {
//         console.log(`hii ${this.name}`)
//     }
// }

// const p1 = new Person("zaid", 20);

// console.log(p1)
// p1.sayHii()


// 👉 public = sarkari cheez koi bhi use karlo 🌍
// 👉 private = mera personal locker 🔒 (kisi ko nahi dunga)
// 👉 protected = family locker 👨‍👦 (sirf apne log use kar sakte)

// class User {
//     public name: string;
//     private password: string;

//     constructor(name: string, password: string) {
//         this.name = name,
//         this.password = password
//     }

//     showPassword() {
//         console.log(`YOUR PASSWORD IS : ${this.password}`)
//     }

//     checkPassword(pass: string) {

//         return pass === this.password

//     }
    
// }

// const u1 = new User("zaid", "123")
// const isCorrecct = u1.checkPassword("123")
// console.log(isCorrecct)
// console.log(u1.showPassword())

// class Parent {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age
//     }

//      sayHii() {

//         console.log(`Hii ${this.name}`)

//      }
// }

// class Child extends Parent {

//     role: string;

//     constructor(name: string, age: number, role: string) {
//         super(name, age);

//         this.role = role;

//     }
// }

// const p1 = new Parent("zaid", 20)
// console.log(p1)

// const c1 = new Child("zzz", 12, "child")
// console.log(c1)


// Getter :- private value ko read karne ke liye
// Setter :- private value ko update or change karne ke liye

// class User {
//     private balance: number;

//     public user: string;

//     constructor(user: string, balance: number) {
//         this.user = user;
//         this.balance = balance
//     }

//     get checkBalance() {
//         return this.balance;
//     }
//     set addBalance(num: number) {
//         this.balance += num;
//     }
// }

// const u1 = new User("zaid", 120);

// console.log(u1.checkBalance)
// console.log(u1)

// u1.addBalance = 30;
// console.log(u1.checkBalance)

//  Static :- static vo value hote hai jo class ke name se access hote hai

// class Company {
//     static company_name = "zaid_private_limited";

//     emp_name: string;
//     emp_salary: number;

//     constructor(name: string, salary: number) {
//         this.emp_name = name;
//         this.emp_salary = salary
//     }
// }


// console.log(Company.company_name)

// const emp1 = new Company("emp1", 12000)
// console.log(emp1)