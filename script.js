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

//getting text content of each number button and assign the currentValue
numbers.forEach(number => number.addEventListener('click',function(e){
    handleNumbers(e.target.textContent)
    currentScreen.textContent = currentValue 
}));

function handleNumbers(num){
    currentValue += num
}

//getting text content of each operator button and assign it to operator value, updating previous value and current value
operators.forEach( op => op.addEventListener('click',function(e){
    handleOperators(e.target.textContent)
    previousScreen.textContent = `${previousValue} ${operator}`
    currentScreen.textContent = ''
}))

function handleOperators(op){
    operator = op
    previousValue = currentValue
    currentValue = ''
}

// function that clears and  sets everything to start
let clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    currentScreen.textContent = ''
    previousScreen.textContent = ''
    currentValue = ''
    previousValue = ''
    operator = ''
})

// updating currentValue, previousValue, and displaying answer on screen when equal button is clicked
equal.addEventListener('click', function(){

    if(isNaN(operate()) === false){
        currentValue = operate()
        currentScreen.textContent = currentValue
        previousValue = ''
        previousScreen.textContent = previousValue
    } else if(operate() === 'Error'){
        currentValue = ''
        currentScreen.textContent = 'Error'
        previousValue = ''
        previousScreen.textContent = previousValue
    } else if(operate() === undefined){
        currentValue = ''
        currentScreen.textContent = 'Start again!'
        previousValue = ''
        previousScreen.textContent = previousValue
    }
})

// fucntion that adds decimal in calculator when dot button is clicked
let decimal = document.querySelector('.dot')
decimal.addEventListener('click', function(e){
    
    if(currentValue.includes(e.target.textContent) === false){
        currentValue += e.target.textContent
        currentScreen.textContent = currentValue
    } 

})

// function that switches dark and light mode
let mode = document.querySelector('.mode')
    mode.addEventListener('click', function(){
        changeMode()
})

let body = document.querySelector('body').style
let title = document.querySelector('h1').style

function changeMode(){
    if (body.backgroundColor === 'grey'){
        body.backgroundColor = 'black'
        title.color = 'white'

        numbers.forEach(item => item.style.color = '')
        equal.style.color = 'paleturquoise'
        operators.forEach(item => item.style.color = 'paleturquoise')

        decimal.style.color = 'paleturquoise'
        decimal.addEventListener('mouseover',function (e) {e.target.style.color = 'black'})
        decimal.addEventListener('mouseout',function (e) {e.target.style.color = 'paleturquoise'})
        clear.addEventListener('mouseover',function (e) {e.target.style.color = 'black'})
        clear.addEventListener('mouseout',function (e) {e.target.style.color = 'paleturquoise'})
        equal.addEventListener('mouseover',function (e) {e.target.style.color = 'black'})
        equal.addEventListener('mouseout',function (e) {e.target.style.color = 'paleturquoise'})

        operators.forEach(item => item.addEventListener('mouseover',function (e) {e.target.style.color = 'black'}))
        operators.forEach(item => item.addEventListener('mouseout',function (e) {e.target.style.color = 'paleturquoise'}))
        numbers.forEach(item => item.addEventListener('mouseover',function (e) {e.target.style.color = 'black'}))
        numbers.forEach(item => item.addEventListener('mouseout',function (e) {e.target.style.color = 'paleturquoise'}))


        screen.style.borderColor = 'skyblue'
        currentScreen.style.color = 'skyblue'
        previousScreen.style.color = 'skyblue'
        clear.style.color = 'paleturquoise'

        mode.style.color = 'grey'
        mode.textContent = "Grey"
        mode.style.backgroundColor = 'black'
        mode.style.borderColor = 'grey' 
        
    } else {
        body.backgroundColor = 'grey'
        title.color = 'black'

        numbers.forEach(item => item.style.color = 'black')
        equal.style.color = 'black'
        operators.forEach(item => item.style.color = 'black')
        decimal.style.color = 'black'
        clear.style.color = 'black'

        screen.style.borderColor = 'navy'
        currentScreen.style.color = 'navy'
        previousScreen.style.color = 'navy'

        mode.style.color = 'black'
        mode.textContent = "Dark"
        mode.style.backgroundColor ='grey'
        mode.style.borderColor = 'black'
       
        decimal.addEventListener('mouseover',function (e) {e.target.style.color = 'black'})
        decimal.addEventListener('mouseout',function (e) {e.target.style.color = 'black'})
        clear.addEventListener('mouseover',function (e) {e.target.style.color = ' black'})
        clear.addEventListener('mouseout',function (e) {e.target.style.color = 'black'})
        equal.addEventListener('mouseover',function (e) {e.target.style.color = 'black'})
        equal.addEventListener('mouseout',function (e) {e.target.style.color = 'black'})

        numbers.forEach( item =>  item.addEventListener('mouseover',function (e) {e.target.style.color = 'black'}))
        numbers.forEach( item =>  item.addEventListener('mouseout',function (e) {e.target.style.color = 'black'}))
        operators.forEach(item => item.addEventListener('mouseover',function (e) {e.target.style.color = 'black'}))
        operators.forEach(item => item.addEventListener('mouseout',function (e) {e.target.style.color = 'black'}))
    }

}