
let outputWindow = document.querySelector('#output-window');
let result;
let firstNumber = '';
let secondNumber = '';
let orangeOperations = document.querySelector('#division');

function selectNumber(e) {
    if(anyOperation) {
        if(secondNumber === '0' && e.srcElement.innerHTML !== ',') {              //add 2 condition
            secondNumber = '' + e.srcElement.innerHTML;
        } else if(secondNumber === '-0') {
            if(e.srcElement.innerHTML === ',') {
                secondNumber = '-0' + e.srcElement.innerHTML;
            } else {
                secondNumber = '-' + e.srcElement.innerHTML;
            }
        } else if(!secondNumber && e.srcElement.innerHTML === ',') {
            secondNumber = '0,';
        } else if(secondNumber.includes(',')) {              //NEW IF
            secondNumber = (e.srcElement.innerHTML !== ',' && secondNumber.length < 10) ? secondNumber + e.srcElement.innerHTML : secondNumber; //add 2 condition
        } else if(secondNumber.includes('-') || secondNumber.includes(',')) {
            secondNumber = (secondNumber.length < 10 ) ? secondNumber + e.srcElement.innerHTML : secondNumber;
        } else {
            secondNumber = (secondNumber.length < 9) ? secondNumber + e.srcElement.innerHTML : secondNumber;
        }
        outputWindow.innerHTML = secondNumber.replace('.', ',');
    } else {
        if(firstNumber === '0' && e.srcElement.innerHTML !== ',') {              //add 2 condition
            firstNumber = '' + e.srcElement.innerHTML;
        } else if(firstNumber === '-0') {
            if(e.srcElement.innerHTML === ',') {
                firstNumber = '-0' + e.srcElement.innerHTML;
            } else {
                firstNumber = '-' + e.srcElement.innerHTML;
            }
        } else if(!firstNumber && e.srcElement.innerHTML === ',') {
            firstNumber = '0,';
        } else if(firstNumber.includes(',')) {              //NEW IF
            firstNumber = (e.srcElement.innerHTML !== ',' && firstNumber.length < 10) ? firstNumber + e.srcElement.innerHTML : firstNumber; //add 2 condition
        } else if(firstNumber.includes('-') || firstNumber.includes(',')) {
            firstNumber = (firstNumber.length < 10) ? firstNumber + e.srcElement.innerHTML : firstNumber;
        } else {
            firstNumber = (firstNumber.length < 9) ? firstNumber + e.srcElement.innerHTML : firstNumber;
            result = undefined;
        }
        outputWindow.innerHTML = firstNumber.replace('.', ',');
    }
        if (orangeOperations.style.backgroundColor === 'white') {
            orangeOperations.style.backgroundColor = 'orange';
            orangeOperations.style.color = 'white';
        }
        clearsButton.innerHTML = 'C';
} 


function clear(e) {
    if (result) {
            result = undefined; 
    } else if(firstNumber && (!secondNumber || secondNumber === '0')) {
        firstNumber = '';
        anyOperation = undefined;
    } else if(secondNumber) {
        secondNumber = '0';
        outputWindow.innerHTML = '0'; 
    } else if(anyOperation && !secondNumber) {
        anyOperation = undefined;
    }
    outputWindow.innerHTML = '0'
    clearsButton.innerHTML = 'AC';
    if (orangeOperations.style.backgroundColor === 'white') {
        orangeOperations.style.backgroundColor = 'orange';
        orangeOperations.style.color = 'white';
    }
}

let anyOperation;
function chooseOperation(e) {
    if (anyOperation && secondNumber) {
        calculate();
    }
    anyOperation = e.srcElement.id;
    console.log('operation', anyOperation);
}


function plusMinus() {
    if(anyOperation) {
        if(secondNumber === '0,') {
            secondNumber = '-0,'
        } else if(secondNumber.substr(-1) === ',') {
            secondNumber = (-secondNumber.replace(',', '.')).toString();
            secondNumber += ',';
        } else if(secondNumber) {
            secondNumber = (-secondNumber.replace(',', '.')).toString(); 
        } else {
            secondNumber = '-0';
            console.log('plusMinus 2N', secondNumber);
        }
        outputWindow.innerHTML = secondNumber.replace('.', ',');
    } else {
        if(firstNumber === '0,') {
            firstNumber = '-0,'
        } else if(firstNumber.substr(-1) === ',') {
            firstNumber = (-firstNumber.replace(',', '.')).toString();
            firstNumber += ',';
        } 
         else if(firstNumber) {
            firstNumber = (-firstNumber.replace(',', '.')).toString();
        } else  {
            firstNumber = '-0';
        }
        outputWindow.innerHTML = firstNumber.replace('.', ',');
    }
    if(result && !anyOperation) { 
        if(result.includes('e')) {
        result = ((-result).toExponential(5));
        } else {
            result = (-result).toString();
        }
        outputWindow.innerHTML = result.replace('.', ',');
    }
}

// else if(result.includes('Infinity') || result === 'Ошибка') {
//     outputWindow.innerHTML = 'Ошибка';
// }
function calculate() {
    firstNumber = firstNumber.replace(',', '.');
    secondNumber = secondNumber.replace(',', '.');
    if(result) {
        firstNumber = result;
    }
    if(!firstNumber) {
        firstNumber = 0;
    }
    if(!secondNumber) {
        secondNumber = firstNumber;
    }
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    switch(anyOperation) {
        case "plus": outputWindow.innerHTML = +(a+b).toFixed(8); break;
        case "minus": outputWindow.innerHTML = +(a-b).toFixed(8); break;
        case "division": outputWindow.innerHTML = +(a/b).toFixed(8); break;
        case "multiplication": outputWindow.innerHTML = +(a*b).toFixed(8); break;
        case "procent": outputWindow.innerHTML = +((a*b)/100).toFixed(8); break;
        // default: alert('wrong action');
    }
    if(outputWindow.innerHTML.includes(',')) {
        outputWindow.innerHTML = outputWindow.innerHTML.replace(',','.');
    }
    if(outputWindow.innerHTML.includes('.') && outputWindow.innerHTML.includes('-')) {
        result = (outputWindow.innerHTML.length > 11) ? ((+outputWindow.innerHTML).toExponential(5)) : outputWindow.innerHTML;
    } else if(outputWindow.innerHTML.includes('.') || outputWindow.innerHTML.includes('-')) {
        result = (outputWindow.innerHTML.length > 10) ? ((+outputWindow.innerHTML).toExponential(5)) : outputWindow.innerHTML;
    } else {
        result = (outputWindow.innerHTML.length > 9) ? ((+outputWindow.innerHTML).toExponential(5)) : outputWindow.innerHTML;
    }
    // result = parseFloat(outputWindow.innerHTML);
    if(parseFloat(result) === Infinity || parseFloat(result) === -Infinity  || result === 'NaN' ) {
        console.log('Privetiki');
        result = undefined;
        outputWindow.innerHTML = 'Ошибка';
    } else {
        outputWindow.innerHTML = result.replace('.',',');
    }
    if (orangeOperations.style.backgroundColor === 'white') {
        orangeOperations.style.backgroundColor = 'orange';
        orangeOperations.style.color = 'white';
    }
    // || Number.isNaN(result)
    // if(parseFloat(result) === Infinity || Number.isNaN(parseFloat(result))) {
    //         result = 'Ошибка';
    // }
    // outputWindow.innerHTML = result.replace('.',',');
    // if(parseFloat(result) === Infinity || Number.isNaN(parseFloat(result))) {
    //     result = 'Ошибка';
    // }
    // } else if(result.includes('.')) {
    //     outputWindow.innerHTML = result.replace('.', ',');
    // }
    // if(result.includes('.')) {
    //     result = result.replace('.',',');
    // }
    // outputWindow.innerHTML = result;
    anyOperation = undefined;
    firstNumber = '';
    secondNumber = '';
}
// Number.isNaN(result))
// orangeOperations.style.backgroundColor = 'orange';
function changeColor() {
        if(document.querySelector('#division').style.backgroundColor === 'white'){
            document.querySelector('#division').style.backgroundColor = 'orange';
            document.querySelector('#division').style.color = 'white';
        } else if(document.querySelector('#multiplication').style.backgroundColor === 'white') {
            document.querySelector('#multiplication').style.backgroundColor = 'orange';
            document.querySelector('#multiplication').style.color = 'white';
        } else if(document.querySelector('#minus').style.backgroundColor === 'white') {
            document.querySelector('#minus').style.backgroundColor = 'orange';
            document.querySelector('#minus').style.color = 'white';
        } else if(document.querySelector('#plus').style.backgroundColor === 'white') {
            document.querySelector('#plus').style.backgroundColor = 'orange';
            document.querySelector('#plus').style.color = 'white';
        }
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        orangeOperations = this;
}

//NUMBERSBUTTONS
let zerossButton = document.querySelector('#zero')
zerossButton.onclick = selectNumber

let onesButton = document.querySelector('#one')
onesButton.onclick = selectNumber 

let twosButton = document.querySelector('#two')
twosButton.onclick = selectNumber
// twosButton.addEventListener('click', selectNumber)
// twosButton.addEventListener('click', changeColor)

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
clearsButton.onclick = clear

let plusminussButton = document.querySelector('#plusminus')
plusminussButton.onclick = plusMinus

let procentsButton = document.querySelector('#procent')
procentsButton.onclick = chooseOperation
// procentsButton.addEventListener('click', chooseOperation)
// procentsButton.addEventListener('click', changeColor)


let divisionsButton = document.querySelector('#division')
// divisionsButton.onclick = chooseOperation
divisionsButton.addEventListener('click', chooseOperation)
divisionsButton.addEventListener('click', changeColor)

let multiplicationsButton = document.querySelector('#multiplication')
// multiplicationsButton.onclick = chooseOperation
multiplicationsButton.addEventListener('click', chooseOperation)
multiplicationsButton.addEventListener('click', changeColor)

let subtractionsButton = document.querySelector('#minus')
// subtractionsButton.onclick = chooseOperation
subtractionsButton.addEventListener('click', chooseOperation)
subtractionsButton.addEventListener('click', changeColor)

let additionsButton = document.querySelector('#plus')
// additionsButton.onclick = chooseOperation
additionsButton.addEventListener('click', chooseOperation)
additionsButton.addEventListener('click', changeColor)

let equelsButton = document.querySelector('#equel')
equelsButton.onclick = calculate


// console.dir(document.querySelector('#output-window'))
// document.querySelector('#output-window').innerHTML = 55










// let outputWindow = document.querySelector('#output-window');

// let firstNumber = '';
// let secondNumber = '';
// function selectNumber(e) {
//     if(anyOperation === undefined) {
//         firstNumber = firstNumber + e.srcElement.innerHTML;
//         outputWindow.innerHTML = firstNumber;
//         console.log('Это first намбер' + firstNumber);
//     } else {
//         secondNumber = secondNumber + e.srcElement.innerHTML;
//         outputWindow.innerHTML = secondNumber;
//         console.log('Это секонд намбер' + secondNumber);
//     }
// }


// let anyOperation;
// function chooseOperation(e) {
//     if (anyOperation !== undefined && secondNumber !== '') {
//         calculate(e);
//         console.log(e);
//     }
//     anyOperation = e.srcElement.id;
//     console.log(anyOperation);
//     console.log(e)
// }


// function calculate(e) {
//     let a = parseInt(firstNumber);
//     let b = parseInt(secondNumber);
//     switch(anyOperation){
//         case "plus": outputWindow.innerHTML = (a+b); break;
//         case "minus": outputWindow.innerHTML = (a-b); break;
//         case "division": outputWindow.innerHTML = (a/b); break;
//         case "multiplication": outputWindow.innerHTML = (a*b); break;
//         case "procent": outputWindow.innerHTML = (a*b)/100; break;
//         default: alert('wrong action');
//     }
//     anyOperation = undefined;
//     firstNumber = e === undefined ? '' : outputWindow.innerHTML;
//     console.log('это ферстнамбер' + firstNumber);
//     console.log('это секонднамбер' + secondNumber);
//     // console.log(e)
//     secondNumber = '';
//     console.log('CALC');
//     console.log(anyOperation)
// }















// let outputWindow = document.querySelector('#output-window');
// let result;
// let firstNumber = '';
// let secondNumber = '';
// function selectNumber(e) {
//     if(anyOperation === undefined && result === undefined) {
//         // firstNumber = firstNumber + e.srcElement.innerHTML;
//         // outputWindow.innerHTML = firstNumber;
//         if (firstNumber.length <= 8) {
//             firstNumber = firstNumber + e.srcElement.innerHTML;
//             outputWindow.innerHTML = firstNumber;
//         }
//         console.log('Это first намбер' + firstNumber);
//     } else if(anyOperation === undefined && result !== undefined) {
//         firstNumber = e.srcElement.innerHTML;
//         result = undefined;
//         outputWindow.innerHTML = firstNumber;
//         console.log('Это обновленный first намбер' + firstNumber);
//     } else {
//         secondNumber = secondNumber + e.srcElement.innerHTML;
//         outputWindow.innerHTML = secondNumber;
//         console.log('Это секонд намбер' + secondNumber);
//     }
//     // if(result !== undefined) {
//     //     firstNumber = '' + e.srcElement.innerHTML;
//     //     outputWindow.innerHTML = firstNumber;
//     // }
// }

// function clear(e) {
//     if(secondNumber) {
//         secondNumber = '';
//         outputWindow.innerHTML = '0';
//         clearsButton.innerHTML = 'AC'
//     } else if(firstNumber) {
//         firstNumber = '';
//         anyOperation = undefined;
//         outputWindow.innerHTML = '0';
//         clearsButton.innerHTML = 'AC';
//     } else if (result) {
//         result = 0;
//         outputWindow.innerHTML = result;
//         clearsButton.innerHTML = 'AC';
//     } 
// }

// // let anyOperation;
// // function chooseOperation(e) {
// //     if (anyOperation !== undefined && secondNumber !== '') {
// //         calculate();
// //     }
// //     anyOperation = e.srcElement.id;
// // }
// let anyOperation;
// function chooseOperation(e) {
//     if (anyOperation !== undefined && secondNumber !== '') {
//         calculate();
//     } else if (firstNumber === '') {
//         firstNumber = 0;
//     } else if (secondNumber === '') {
//     }
//     anyOperation = e.srcElement.id;
// }
















// let orangeButtons = document.querySelectorAll('.orange-button');;
// [...orangeButtons].map((e)=>{
//     e.onmouseover = ()=> { e.style.backgroundColor = '#1eae4f', e.style.color = 'white'; }
//     e.onmouseout = ()=> { e.getAttribute('data') !== '' ? (e.style.backgroundColor = 'white', e.style.color = '#1eae4f') : ''; }
//     e.onclick = ()=> {
//         [...btn].map((e)=>{ e.setAttribute('data', 'active'), e.style.backgroundColor = 'white', e.style.color = '#1eae4f'; });
//         e.setAttribute('data', ''), e.style.backgroundColor = '#1eae4f', e.style.color = 'white';
//     }
// });











// let blabla = '';
// if(blabla !== true) {
//     console.log('rabotaju');
// }



// let blabla1 = '4';
// if(blabla1 !== true) {
//     console.log('rabotaju');
// }






// let blablaT = true;

// if(blabla !== true) {
//     console.log('rabotaju');
// }
// console.log(blabla);



// let blablaF = false;

// if(blabla !== true) {
//     console.log('rabotaju');
// }
// console.log(blabla);




// let blabla = '4';

// if(blabla !== true) {
//     console.log('rabotaju');
// }
// console.log(blabla);




// let blabla = '4';

// if(blabla !== true) {
//     console.log('rabotaju');
// }
// console.log(blabla);

// switch(anyOperation){
//     case "plus": outputWindow.innerHTML = +(a+b).toFixed(8); break;
//     case "minus": outputWindow.innerHTML = +(a-b).toFixed(8); break;
//     case "division": outputWindow.innerHTML = +(a/b).toFixed(8); break;
//     case "multiplication": outputWindow.innerHTML = +(a*b).toFixed(8); break;
//     case "procent": outputWindow.innerHTML = +((a*b)/100).toFixed(8); break;
//     default: alert('wrong action');
// }
// //