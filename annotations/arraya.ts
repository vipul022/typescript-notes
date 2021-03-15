const carMakers = ['Ford', 'Toyota']


// ! prevent incompatible value
carMakers.push(100);

// !useful while using higher order functions. The string before => refers to the return value 

carMakers.map((car: string): string => {
return car
})
