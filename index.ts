import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/todos/1';

//! What is Type?
//!  Easy way to refer to the different properties and functions that a value has.
//! Here Todo(value) is a label/shortcut for describing the different properties and methods a single value has. Every value has a type which is object in this case.

// ! interface is used to define the structure of the value(Todo)
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res=> {

  // ! res.data is refered as Todo to compare the properties to find the errors
  const todo = res.data as Todo;
  const {id, title, completed} = todo;
  logTodo(id, title, completed)
});

  // !pass the predefined data types along with argumants
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `The todo with id ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `);
}