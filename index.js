"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
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
axios_1.default.get(url)
    .then(response => {
    console.log(`The endpoint is reachable.`);
    // console.log(response.data);
    //here we're telling typescript this will have the same structure as our Detail
    const todo = response.data;
    const ID = todo.id;
    const firstName = todo.firstName;
    const phone = todo.phone;
    console.log(`
    the todo with ID: ${ID}
    has a title of: ${firstName}
    is with a mobile number: ${phone}
    `);
})
    .catch(error => {
    console.log(`The endpoint is not reachable: ${error}`);
});
