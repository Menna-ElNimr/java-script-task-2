let num1 = 7;
let operator = "/";
let num2 = 2;

let result;

if (operator === "+") {
    result = num1 + num2;
} 
else if (operator === "-") {
    result = num1 - num2;
} 
else if (operator === "*") {
    result = num1 * num2;
} 
else if (operator === "/") {
   
        result = num1 / num2;
    } 
else {
    result = "Invalid operator";
}
document.write("Result =", result);
