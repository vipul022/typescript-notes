// ! using Type annotations with variables

let appples: number = 5;

let speed: boolean = true;

let nothing: null = null;

// !built in objects
let now : Date = new Date()

// !Array Type annotations
//  !this means that colors will be an array of strings

let colors: string[] = ['red', 'blue']

let numbers: number[] = [1,2,3]

// !this means an array can conatin both string and date type
let importantDates: (string | Date)[] = []
// ! Classes

class Car {

}
// !here variable car has a type 'Car' and it is the instance of 'Car'
let car: Car = new Car();

// ! Object literals

// !In order to add Type annotation to point, we need to add it's type which is an object {} and inside it add all properties names with their respective types
let point: {x: number; y: number} = {
  x: 10,
  y: 20
}

// ! function

// !here every thing before = is the annotation of the function. (i: number) is the anootation for argument 'i' and 'void' is used as this functions does not return anything. Everyhting after = is the actual body of function


const logNumber: (i: number) => void  = (i:number) => {
console.log(i);
}

// ! When to use type annotations

// ! !) Function that returns the 'any' type

const json = '{"x": 10, "y": 12}'
// !in this case TypeScript has no idea what will be the 'Type' returned by JSON.parse(), so it displays 'any'
const coordinates = JSON.parse(json);
console.log(coordinates);

// ! below is how we fix the 'any' by adding Type annotation
// const coordinates: {x: number; y: number} = JSON.parse(json);
// console.log(coordinates);

// ! 2) When we decalare variables on one line and initialize later

// ! 3) Variables whose type cannot be inferred correctly