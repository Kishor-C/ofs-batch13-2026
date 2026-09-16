import div, { sum, sub } 
    from "./util.ts";

let result = sum(20, 10, 30, 40);
console.log(`$Result = ${result}`);
let divResult = div(20, 10);
console.log(`Div Result = ${divResult}`);

// creating variables with types
let id: number = 25;
// creating variables without types - type inference, typescript adds type automatically based on value
let username = "Alex"; // type inference - username will be string type
// multiple types with |
let height: number | string = "5.6ft";
height = 5.6;
// Grammar | Syntax for function - below function returns string
function greet(name: string): string {
  return `Hello ${name}`;
}
let message: string = greet(username);
//print the data - you must compile this hello.ts and run hello.js : tsc hello.ts ==> node hello.js
console.log(
  `Message = ${message}, Height = ${height}, Id = ${id}, Username = ${username}`,
);
//checking the type of variables
console.log(
  `Type of username: ${typeof username}, Type of height: ${typeof height}`,
);
/*
Typescript is a super set of javascript, which adds types to the variables and functions
pedefined types are - number, string, boolean, any, undefined, classType
This makes data more reliable
Syntax in JS: 
let username = "Alex";
username = 25;
username = new Date(2004,10,25);
Syntax in TS:
let username : string = "Alex";
username = 25; // error
Typescript tools & framework - automatically compiles TS
 - vite, angular-cli, @oracle/ojet
 - for manual conversion we must have typescript compiler : npm install typescript
*/
