const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// !Below we are representing the above object as a tupple

// !Type alias: 
type Drink = [string, boolean, number];

// !below s the structure of a tupple. Syntax is similar to an array but we need to add annotaions (Drink in this case) to specify the types of the vallues inside tupple.
const pepsi: Drink = ['brown', true, 40]