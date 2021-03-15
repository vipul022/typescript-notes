
// !syntax for declaring interface. 
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  // !we can also have functions in iterfaces. here the function returns string
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  // !the function does noe take any argument but return a string
  summary(): string {
    return `Name: ${this.name}`
  }
};

// !in order to pass a vehicle as an argument, it's properties must match with Vehicle interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary())
}

printVehicle(oldCivic);