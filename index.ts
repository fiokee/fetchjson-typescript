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



const url = 'https://dummyjson.com/users/1';

interface Detail{
    id: number;
    firstName: string;
    phone: number
}
axios.get(url)
.then(response => {
    console.log(`The endpoint is reachable.`);
    // console.log(response.data);

    /*here we're telling typescript this will have the same 
    structure as what is discribe as our Detail
    */
    const todo = response.data as Detail;

    const ID = todo.id;
    const firstName = todo.firstName;
    const phone = todo.phone;
    console.log(`
    the todo with ID: ${ID}
    has a title of: ${firstName}
    is with a mobile number: ${phone}
    `)
})
.catch(error => {
    console.log(`The endpoint is not reachable: ${error}`);
});
 