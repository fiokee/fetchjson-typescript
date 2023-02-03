let apples: number = 5;
console.log(apples)
// types in typescript
let speed:string = 'fast';
let itWorking: boolean = false;
let ourMeeting:null = null;
let nothing: undefined = undefined;

// built in object

const now:Date = new Date();

//Array

const colors: string[] = ['red', 'green','blue','yellow'];
let numbers:number[] = [1,2,3,4];
let Truth: boolean[] = [true, false];

let color: Color = new Color();

//Object literal

let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

//function

const logNumber = (i:number)=>{
    console.log(i)
}