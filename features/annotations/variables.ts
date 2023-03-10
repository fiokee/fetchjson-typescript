

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

const logNumber: (i:number)=> void = (i:number)=>{
    console.log(i)
}


// const logString: (i:string)=> void = (i: string)=>{
//     console.log(i)

//THIS ARE DIFFERENT METHODS TO APPLY TYPE ANNOTATIONS
// }
const json = '{"x": 10, "y": 20}';
const coordinates:{y: number; x:number} = JSON.parse(json)
console.log(coordinates)

//when we declare a variable on one line and initialize it later

//little app that gets to check if the words exist or not
const words = ['red', 'yellow', 'green']
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
    
    if(words[i] === "green"){
        foundWord = true;
    }
}

// variables whose type cannot be inferred

let nums = [-10, -13, 12];
let numberAbove: boolean | number = false;

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
        numberAbove = nums[i]
    }
}