const prompt = require("prompt-sync")()

let number1;
let number2;
while(true){
    const number1 = parseFloat(prompt("Enter Number 1 : "))
    if(isNaN(number1)){
        console.log('Invalid')
    }else{
        break;
    }
}
while(true){
    const number2 = parseFloat(prompt("Enter Number 2 : "))
    if(isNaN(number2)){
        console.log('Invalid')
    }else{
        break;
    }
}
const operator = prompt("Enter the operator : ")

let result ;
let valid = true
switch(operator){
    case "+":
        result = number1 + number2
        break;
    case "-":
        result = number1 - number2
        break;
    case "*":
        result = number1 * number2
        break;
    case "/":
        result = number1 / number2
        break;
        default:
            console.log("Invalid")
            valid = false
            break;
}

if(valid)
    console.log(number1 , operator, number2, "=" , result)