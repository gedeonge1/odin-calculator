//function that takes two argument at time and return the result
function add(num1,num2){
    num1 += num2
    return num1
   }
function substract(num1,num2){
    num1 -= num2
    return num1
}
function multiply(num1,num2){
   num1 *= num2
   return num1
}
function divide(num1,num2){
    num1 /= num2
    return num1
}

// declaring 3 variables that will hold 2 values and an operator
let currentValue = '';
let previousValue = '' ;
let operator = '';

//function that checks 2 values and an operator and returns the right answer
function operate(){
    
    if(currentValue === '' || previousValue === ''){
        return;
    } else if(currentValue === '0' && operator === '/'){
        return 'Error'
    }
    currentValue = Number(currentValue)
    previousValue = Number(previousValue)
    

    let result
    switch(operator){
    case '+':
        result = add(previousValue,currentValue)
        break
    case '-':
        result = substract(previousValue,currentValue);
        break;
    case 'x':
        result = multiply(previousValue,currentValue);
        break;
    case '/':
        result = divide(previousValue,currentValue)

    }
    let roundedResult = Math.round(result * 1000)/1000
    return roundedResult
}

//getting all html elements inorder to perform different actions with them
let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let equal = document.querySelector('.equal')
let previousScreen = document.querySelector('.previous-number')
let currentScreen = document.querySelector('.current-number')
let screen = document.querySelector('.screen')

previousScreen.style.color = 'paleturquoise'
currentScreen.style.color = 'paleturquoise'