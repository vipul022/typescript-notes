
// !first we add type to the arguments, then :number to add type to the return value.
const add =  (a: number,b: number): number => {
return a+b;
}

// ! destructuring in functions

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}) => {
  console.log(date);
  console.log(weather)
}

logWeather(todaysWeather)