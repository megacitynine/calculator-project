let firstNumber = {
    wholePart: '',
    decimalPart: '',
    hasDot: false,
    hasMinus: false,
};
let secondNumber = {
    wholePart: '',
    decimalPart: '',
    hasDot: false,
    hasMinus: false,
};
let result = {
    wholePart: '',
    decimalPart: '',
    hasDot: false,
    hasMinus: false,
};
let emptyObj = {
    wholePart: '',
    decimalPart: '',
    hasDot: false,
    hasMinus: false,
};

let anyOperation;
let outputWindow = document.querySelector('#output-window');

let operationsHashTable = {
    '÷': document.querySelector("#operation-0"),
    '×': document.querySelector("#operation-1"),
    '-': document.querySelector("#operation-2"),
    '+': document.querySelector("#operation-3"),
}

let getNumberString = (numberObj) => {
    let numberString = '';
    if(numberObj.hasMinus) numberString = '-';
    numberString += numberObj.wholePart ? numberObj.wholePart : '0';
    if(numberObj.hasDot) numberString += '.';
    numberString += numberObj.decimalPart;
    return numberString;
}

let toggleOperationColors = () => {
    if(anyOperation) {
        let el = operationsHashTable[anyOperation];
        el.style.color = el.style.color ? '' : 'black';
        el.style.backgroundColor = el.style.backgroundColor ? '' : 'white';
    }
}


let getNumberObject = (str) => {
    let arrayStr = str.split('.');
    return {
        wholePart: arrayStr[0].replace('-',''),
        decimalPart: arrayStr[1] || '',
        hasDot: str.includes('.'),
        hasMinus: str.includes('-'),
    }
}

let selectNumber = (e) => {
    let currentNumber = !anyOperation ? firstNumber : secondNumber;
    if((currentNumber.wholePart + currentNumber.decimalPart).length < 9) {
        if(currentNumber.hasDot) {
            currentNumber.decimalPart += e.target.innerHTML;
        } else {
            if(!currentNumber.wholePart && e.target.innerHTML === '0') {
            } else {
                currentNumber.wholePart += e.target.innerHTML;
            } 
        }
    }
    outputWindow.innerHTML = getNumberString(currentNumber).replace('.',',');
    document.querySelector('#clear').innerHTML = 'C';
    toggleOperationColors();
}

let selectComma = () => {
    let currentNumber = !anyOperation ? firstNumber : secondNumber;
    currentNumber.hasDot = true;
    outputWindow.innerHTML = getNumberString(currentNumber).replace('.',',');
    document.querySelector('#clear').innerHTML = 'C';
    toggleOperationColors();
}

let plusminus = () => {
    let currentNumber = !anyOperation ? firstNumber : secondNumber;
    if(result.wholePart) {
        result.hasMinus = !result.hasMinus;
        outputWindow.innerHTML = getNumberString(result);
    } else {
        currentNumber.hasMinus = !currentNumber.hasMinus;
        outputWindow.innerHTML = getNumberString(currentNumber).replace('.',',');
    }
    toggleOperationColors();
}


let selectOperation = (e) => {
    toggleOperationColors();
    if(anyOperation && secondNumber.wholePart) {
        calculate();
    } else {
        anyOperation = e.target.innerHTML;
    }
    document.querySelector('#clear').innerHTML = 'C';
    toggleOperationColors();
}

let calculate = () => {
    let resultNumber;
    if(!firstNumber.wholePart) firstNumber.wholePart = '0';
    if(!secondNumber.wholePart) secondNumber.wholePart = '0';
    if(!firstNumber.wholePart && anyOperation) firstNumber = {...result};
    if(!secondNumber.wholePart) secondNumber = firstNumber;  
    switch(anyOperation) {
        case '÷': resultNumber = +getNumberString(firstNumber) / +getNumberString(secondNumber); break;
        case '×': resultNumber = +getNumberString(firstNumber) * +getNumberString(secondNumber); break;
        case '-': resultNumber = +getNumberString(firstNumber) - +getNumberString(secondNumber); break;
        case '+': resultNumber = +getNumberString(firstNumber) + +getNumberString(secondNumber); break;
        case '%': resultNumber = (+getNumberString(firstNumber) * +getNumberString(secondNumber))/100; break;
    }
    let resultString = resultNumber.toString();
    result = getNumberObject(resultString);
    if((result.wholePart + result.decimalPart).length < 9) outputWindow.innerHTML = resultString;
    else outputWindow.innerHTML = (+getNumberString(result)).toExponential(6).replace('+', '');
    firstNumber = {...emptyObj};
    secondNumber = {...emptyObj};
    anyOperation = undefined;
    outputWindow.innerHTML = outputWindow.innerHTML.replace('.',',');
    if(resultNumber === Infinity || resultNumber === -Infinity  || resultNumber === NaN) outputWindow.innerHTML = 'Ошибка';
    toggleOperationColors();
}

let clear = () => {
    if(document.querySelector('#clear').innerHTML === 'C') {
        if(result.wholePart) result = { ...emptyObj };
        else {
            if(!anyOperation) firstNumber = {...emptyObj};
            else secondNumber = {...emptyObj};
        }
    } else {
        firstNumber = { ...emptyObj };
        secondNumber = { ...emptyObj };
        result = { ...emptyObj };
        anyOperation = undefined;
        toggleOperationColors();
    }
    console.log('firstNumber: ', firstNumber);
    console.log('secondNumber: ', secondNumber);
    console.log('result: ', result);
    outputWindow.innerHTML = '0';
    document.querySelector('#clear').innerHTML = 'AC';
}

for (let i = 0; i <= 9; i++) {
    document.querySelector('#button-'+i).addEventListener('click', selectNumber);
}
for (let i = 0; i < 5; i++) {
    document.querySelector('#operation-'+i).addEventListener('click', selectOperation);
}
document.querySelector('#equal').addEventListener('click', calculate);
document.querySelector('#comma').addEventListener('click', selectComma);
document.querySelector('#plusminus').addEventListener('click', plusminus);
document.querySelector('#clear').addEventListener('click', clear);

