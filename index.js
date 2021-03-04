/*let a=parseInt(prompt('4uslo A'));
let b=parseInt(prompt('4uslo B'));
let action=prompt('Enter action: +, -, /, *');

switch(action) {
    case "+": alert(a+b); break;
    case "-": alert(a-b); break;
    case "/": alert(a/b); break;
    case "*": alert(a*b); break;
    default: alert('wrong action');
} */



// function a() {}
// function sumNumbers (a,b) {
//     let numbers=a+b;
//     return numbers
// }
// let sum = sumNumbers(3,4)
// console.log(sum)


//alert(parseInt(prompt('$uslo A'), 10) + parseInt(prompt('4uslo B'), 10))\{
    //  function clear(){

    //  }

    //  function chooseOperation(){

    //  }

    //  function chooseNumber(number){


    //  }

    //  function displayInWindow(){

    //  }







// const numberButtons = document.querySelectorAll('div.number')
// const operationButtons = document.querySelectorAll('div.operation')
// const clearsButton = document.quearySelector('div.clear-button')
// const equelsButton = document.querySelector('div.equel-button')
// const outputsWindow = document.querySelector('div.output-window')

// let document = {
//     quearySelector,
     
// }


// numberButtons.onclick = selectNumber()
// numberrButtons = numberButtons.onclick.map(selectNumber())



























//OPERATIONS
let outputWindow = document.querySelector('#output-window');




let firstNumber = '';
let secondNumber = '';
function selectNumber(e) {
    if(anyOperation === undefined) {
        firstNumber = firstNumber + e.srcElement.innerHTML
        outputWindow.innerHTML = firstNumber
       
    } else {
        secondNumber = secondNumber + e.srcElement.innerHTML
        outputWindow.innerHTML = secondNumber
       
        
    }   
//     console.log(firstNumber)
//     console.log(secondNumber)
}

let anyOperation
function chooseOperation(e) {
    anyOperation = e.srcElement.id
    console.log(anyOperation)
}




// function calculate(){
//     console.log(5)
// }
function calculate(){
    let a = parseInt(firstNumber)
    let b = parseInt(secondNumber)
    
    switch(anyOperation){
        case "plus": outputWindow.innerHTML = (a+b); break;
        case "minus": outputWindow.innerHTML = (a-b); break;
        case "division": outputWindow.innerHTML = (a/b); break;
        case "multiplication": outputWindow.innerHTML = (a*b); break;
        case "procent": outputWindow.innerHTML = (a*b)/100; break;
        default: alert('wrong action');
    }  
}


/*let a=parseInt(prompt('4uslo A'));
let b=parseInt(prompt('4uslo B'));
let action=prompt('Enter action: +, -, /, *');

switch(action) {
    case "+": alert(a+b); break;
    case "-": alert(a-b); break;
    case "/": alert(a/b); break;
    case "*": alert(a*b); break;
    default: alert('wrong action');
} */

//NUMBERSBUTTONS

let zerossButton = document.querySelector('#zero')
zerossButton.onclick = selectNumber

let onesButton = document.querySelector('#one')
onesButton.onclick = selectNumber

let twosButton = document.querySelector('#two')
twosButton.onclick = selectNumber

let threesButton = document.querySelector('#three')
threesButton.onclick = selectNumber

let foursButton = document.querySelector('#four')
foursButton.onclick = selectNumber

let fivesButton = document.querySelector('#five')
fivesButton.onclick = selectNumber

let sixsButton = document.querySelector('#six')
sixsButton.onclick = selectNumber

let sevensButton = document.querySelector('#seven')
sevensButton.onclick = selectNumber

let eightsButton = document.querySelector('#eight')
eightsButton.onclick = selectNumber

let ninesButton = document.querySelector('#nine')
ninesButton.onclick = selectNumber

let commasButton = document.querySelector('#comma')
commasButton.onclick = selectNumber


//OPERATIONSBUTTONS


let clearsButton = document.querySelector('#clear')
clearsButton.onclick = chooseOperation

let plusminussButton = document.querySelector('#plusminus')
plusminussButton.onclick = chooseOperation

let procentsButton = document.querySelector('#procent')
procentsButton.onclick = chooseOperation

let divisionsButton = document.querySelector('#division')
divisionsButton.onclick = chooseOperation

let multiplicationsButton = document.querySelector('#multiplication')
multiplicationsButton.onclick = chooseOperation

let subtractionsButton = document.querySelector('#minus')
subtractionsButton.onclick = chooseOperation

let additionsButton = document.querySelector('#plus')
additionsButton.onclick = chooseOperation

let equelsButton = document.querySelector('#equel')
equelsButton.onclick = calculate


grgr
// console.dir(document.querySelector('#output-window'))
// document.querySelector('#output-window').innerHTML = 55





// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
// // console.log(checkAge(2))
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?')
// }
//  function checkAge(age){
//      return (age > 18) ? true : confirm('Родители разрешили?')
     
//  }




































