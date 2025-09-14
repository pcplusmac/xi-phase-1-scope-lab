// Write your solution in this file!
// Declare customerName
var customerName = "bob";
const leastFavoriteCustomer = "ali";

// Define function to modify varible cutomerName
function upperCaseCustomerName() {
    customerName = "BOB";
    // console.log(customerName.toUpperCase());
    // let name = customerName.toUpperCase();
    // return name;

}

//  Define function to set the best customer
function setBestCustomer() {
    // without using either 'let' or 'const' for the 
    // variable, it will be global scope 
    bestCustomer = "not bob";
    

}

// Define a function to overwrite the result of another function
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    console.log(leastFavoriteCustomer);

}

function changeLeastFavoriteCustomer() {
    // code below is trying to change the value of the const variable
    // it will have error, check it by comment out the console.log line
    // you can only change it after change 'const' to 'let'. try it out 
    
    leastFavoriteCustomer = "changed you";
    // console.log(leastFavoriteCustomer);
}
