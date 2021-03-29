//! What are Decorators?
//! 	• Decorators are functions that can be used to modify/change different properties/methods in the class.
// !	• Not the same as JavaScript decorators.
//! 	• Used inside/on classes only.
//!	• Understanding the order in which decorators are run are the key to understand them.
	
class Boat {
  color:string = 'red';

  formattedColor(): string{
    return `This boat's color is ${this.color}`;
  }
@logError
  pilot(): void {
    throw new Error();
    console.log('swish!!');
  }
}

//! Rules for Decorators:
//! 	• First argument is the prototype of the object.
//!	• Second argument is the key of the property/method/accessor on which the decorator is applied.
//! 	• Third argument is the property discriptor
//! Decorators are applied only once when the code for the class is ran (Not when an instance of the class is created)

function logError (target: any, key: string, desc: PropertyDescriptor): void  {
  const method = desc.value;

  desc.value = function() {
    try{
      method();
    }catch(e) {
      console.log('Oops something went wrong')
    }
  }
}

new Boat().pilot()