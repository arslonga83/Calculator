function add (a, b) {
    return +a + +b;
}
function subtract (a, b) {
    return a-b;
}
function multiply (a, b) {
    return a*b;
}
function divide (a, b) {
    return a / b;
}

function operate ([a, operator, b]) {
    if (operator==='+') {
        return total = add(a, b);
    }
    else if (operator==='-') {
        return total = subtract(a, b);
    }
    else if (operator==='*') {
        return total = multiply (a, b);
    }
    else if (operator==='/') {
        if (b==='0') {
            return 'Impossible'
        }
        else {
        return total = divide (a, b);
    }}
}

const backspace = document.querySelector('#backspace');
const nums = document.querySelectorAll('.num');
const symbols = document.querySelectorAll('.symbol');
const display = document.querySelector('.display');
const btnequals = document.querySelector('#equals');
const btnclear = document.querySelector('#clear');

let memory = '';
let formula = [];

nums.forEach(item => {
    item.addEventListener('click', () => {
    if (formula.length === 2 && memory !== 'digit'|| memory === 'reset') {  
        display.textContent = '';
    }
    if (display.textContent.includes('.') && item.textContent.includes('.')) {  // don't allow multiple decimals
        return;
    };
    display.textContent += item.textContent;
    if(display.textContent.length > '19') {
        display.textContent = 'Too long!'
    }
    memory = 'digit'; //this lets us keep adding digits until we click an operator
    })
})

//operators make use of the text from the display and pushes it into a formula. the operate formala runs everytime it is full 
symbols.forEach(item => {
    item.addEventListener('click', () => {
    memory = display.textContent
    display.textContent = item.textContent;
    formula.push(memory);
    if (formula.length === 3) {
        formula.join();
        display.textContent = operate(formula);
        memory = display.textContent;
        formula = [display.textContent, item.textContent];
    }
    else {
        formula.push(item.textContent)
        memory = ''
    }
    })
})

btnequals.addEventListener('click', () => {
    formula.push(display.textContent);
    formula.join();
    display.textContent = operate(formula);
    if(display.textContent % 1 !== 0) {
        display.textContent = operate(formula).toFixed('5')
        display.textContent = parseFloat(display.textContent);
    }
    memory = 'reset';
    formula = [];
});

btnclear.addEventListener('click', () => {
    display.textContent = '';
    memory = 'reset';
    formula = [];
})

backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, display.textContent.length-1);
})

//these event listeners each simulate a button click, so user can type
addEventListener('keydown', (e) => {
    if(e.key === '1') {
        document.getElementById('one').click();
    }
    else if(e.key === '2') {
        document.getElementById('two').click();
    }
    else if(e.key === '3') {
        document.getElementById('three').click();
    }
    else if(e.key === '4') {
        document.getElementById('four').click();
    }
    else if(e.key === '5') {
        document.getElementById('five').click();
    }
    else if(e.key === '6') {
        document.getElementById('six').click();
    }
    else if(e.key === '7') {
        document.getElementById('seven').click();
    }
    else if(e.key === '8') {
        document.getElementById('eight').click();
    }
    else if(e.key === '9') {
        document.getElementById('nine').click();
    }
    else if(e.key === '0') {
        document.getElementById('zero').click();
    }
    else if(e.key === '.') {
        document.getElementById('decimal').click();
    }
    else if(e.key === '+') {
        document.getElementById('plus').click();
    }
    else if(e.key === '-') {
        document.getElementById('minus').click();
    }
    else if(e.key === '*') {
        document.getElementById('times').click();
    }
    else if(e.key === '/') {
        document.getElementById('divide').click();
    }
    else if(e.key === '=') {
        document.getElementById('equals').click();
    }
    else if(e.key === 'Escape') {
        document.getElementById('clear').click();
    }
    else if(e.key === 'Backspace') {
        document.getElementById('backspace').click();
    }
})
