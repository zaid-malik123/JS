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

interface Greet  { (name: string): string }

const User: Greet = {
    greet: (name) => {
        
    }
}