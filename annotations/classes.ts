class Vehicle {
  // !this is a short-hand for constructor function by using 'public' modifier with the property name. This implicitly matches color with the first argument passed to the instance of Vehicle class
  constructor (public color: string = 'red', public speed: number= 100) {
    
    }
    // !constructor function is called as soon as a new instsnce of class is created
      // constructor(color: string = 'red') {
      //   this.color = color;
      // }
// !created a property color with type string and default value red
  // color: string = 'red';

  drive(): void {
    console.log("lala lala")
  }

  honk(): void {
    console.log("bla bla")
  }
}

// !motor is the instance of class Vehicle
const  motor = new Vehicle ('silver', 20)
motor.drive();
console.log(motor.color)
console.log(motor.speed)


// !below Class Car inherits from class Vehicle, therefore all the instances of Car has access to mehods and properties of Vehicle
class Car extends Vehicle {
// !When child (Car) class has a contructor function as well, i t needs to call super() to call the constructor of parent (Vehiucle) too
  constructor(public wheels: number, color: string) {
   super(color)
  }
  // !below drive method of Vehicle class has been overridden
  drive(): void{
    console.log("Vrooom!")
  }
};

const car = new Car(4,'white');

car.drive()
