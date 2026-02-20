let num1 = 8;
let num2 = 12;
let num3 = 21;

let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

document.write("The largest number is: " + largest);
