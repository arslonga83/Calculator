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
        return total = divide (a, b);
    }
}
const nums = document.querySelectorAll('.num');
const symbols = document.querySelectorAll('.symbol');
const display = document.querySelector('.display');
const btnequals = document.querySelector('#equals');
const btnclear = document.querySelector('#clear');

//we'll use these to store the totals as we go
let memory = '';
let formula = [];

//uses the text printed on each button for both the display and the memory
//nums.forEach(item => {
//    item.addEventListener('click', () => {
//    display.textContent += item.textContent;
//    memory += item.textContent
//    })
//})

//symbols.forEach(item => {
//    item.addEventListener('click', () => {
//    display.textContent = item.textContent;
//    formula.push(memory, item.textContent);
//    memory = '';
//    })
//})

btnequals.addEventListener('click', () => {
    formula.push(memory);
    formula.join();
    display.textContent = operate(formula);
    memory = '';
    formula = [];
});

btnclear.addEventListener('click', () => {
    display.textContent = '';
    memory = '';
    formula = [];
})




//FIGURE THIS OUT LATER
symbols.forEach(item => {
    item.addEventListener('click', () => {
    display.textContent = item.textContent;
    formula.push(memory);
    if (formula.length === 3) {
        formula.join();
        display.textContent = operate(formula);
        memory = display.textContent;
        formula = [display.textContent, item.textContent];
        console.log(formula)
        console.log(memory)
    }
    else {
        formula.push(item.textContent)
        memory = ''
        console.log(memory)
    }
    })
})

nums.forEach(item => {
    item.addEventListener('click', () => {
    if (formula.length === 2) {
        display.textContent = '';
        console.log(memory)
    }
    display.textContent += item.textContent;
    memory = +item.textContent + +memory;
    console.log(memory)
    })
})
