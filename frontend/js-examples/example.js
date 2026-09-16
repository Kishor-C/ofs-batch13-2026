// object destructuring - simplified way to access object properties
let user = { id: 200, username: "Raj", address: { state: "KA", city: "BLR" } };
// accessing id, username, state will be
let stateValue = user.address.state;
let usernameValue = user.username;
// with distructuring you don't have to access with object name
let {
  id,
  username,
  address: { state, city },
} = user; // id = user.username, username = user.username, address = user.address
//let { state, city } = address;
// you can avoid nested access everytime
console.log(`Username = ${username}, State = ${state}`);
// rest and spread parmaters
// 3 dots is used for rest parameter - it is like an array - but it must be the last parameter
// maximum you can have one rest parameter in the function
function sum(a, ...b) {
  console.log(a + " " + b);
}
sum(20, 30); // 20 30
sum(20, 10, 50, 40); //20 10

// spread is used while passing the values to multiple parameters
let arr = [20, 10, 30, 40];
function accept(a, b, c, d) {
  console.log(a, b, c, d);
}
console.log("------ testing rest parameters ------");
accept(arr); // a=20,10,30,40, b=undefined, c=undefined, d=undefined
accept(...arr); // a=20,b=10,c=30,d=40

// arrow functions - it simplifies writing callback functions
console.log("first line");
setTimeout(function () {
  console.log("second line");
}, 0);
setTimeout(() => console.log("another line inside arrow fn"), 0);
// Will the below line wait for second line to print before executing
console.log("third line");
// arrow functions are useful in iterations while iterating arrays
// arrays.forEach(arrowFn), arrays.map(arrowFn)
let price = [3000, 4000, 1000, 5000];
// convert each price to have a discount of 10% and then store in another variable
let discount = price.map(function (item, index) {
  return item * 0.9;
});
console.log(discount);
// with arrow function also we can write the above code
let discountArr = price.map((item, index) => item * 0.8);
console.log(discountArr);
