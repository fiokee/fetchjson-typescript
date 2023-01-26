import axios from "axios";


// const url = 'https://jsonplaceholder.typicode.com/todos/1'
// interface Todo{
//     id: number;
//     title: string;
//     completed: boolean;
// }

// axios.get<Todo>('https://jsonplaceholder.typicode.com/todos/1').then(response=>{
//     console.log(response.data);
// }).catch(error => {
//     console.error(error);
//  });



const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id: number;
    title: string;
    completed: boolean
}
axios.get(url)
.then(response => {
    console.log(`The endpoint is reachable.`);
    // console.log(response.data);
    const todo = response.data as Todo;

    const ID = todo.id;
    const Title = todo.title;
    const finished = todo.completed;
    console.log(`
    the todo with ID: ${ID}
    has a title of: ${Title}
    is it finished? ${finished}
    `)
})
.catch(error => {
    console.log(`The endpoint is not reachable: ${error}`);
});
 