class ArrayOfNumbers {
  constructor(public collection: number[]){}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// !the above 1 classes are replaced by passing in generics <T> below

class ArrayOfAnything<T> {
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index]
  }
}

new ArrayOfAnything<string>(['a', 'b'])

// !Generic Constraints

class Car {
  print() {
    console.log('I am a car')
  }
}
class House {
  print() {
    console.log('I am a house')
  }
}

// !this function will take an array of houses or cars and call their print method

// ! In order to access the print method of Car/House inside the below function, we need to define an interface 'Printable' and add a constraint like '<T extends Printable>' which means 'T' has all the properies of 'Printable'

interface Printable {
  print(): void
}

function printHousesOrCar<T extends Printable>(arr: T[]): void {

  for(let i = 0; i < arr.length; i++){
      arr[i].print()
  }
}

printHousesOrCar<House>([new House(), new House()])