// Write your solution in this file!
// Declare customerName
var customerName = "bob";
leastFavoriteCustomer = "ali";

// Define function to modify varible cutomerName
function upperCaseCustomerName() {
    customerName = "BOB";
}

//  Define function to set the best customer
function setBestCustomer() {
    bestCustomer = "not bob";

}

// Define a function to overwrite the result of another function
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    console.log(leastFavoriteCustomer);

}
// overwriteBestCustomer()
// changeLeastFavoriteCustomer();
// overwriteBestCustomer()