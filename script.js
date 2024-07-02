let first=null, second=null, op=null;
let allOperators = ["+", "-", "*", "/"];
let allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let isNum = false;
        let isOp = false;
        let val = button.textContent;
        isNum = allNumbers.includes(val);
        isOp = allOperators.includes(val);

        if (val == "AC") {
            first = null;
            second = null;
            op = null;
            updateDisplay(first);
        } else
        if (val == "=") {
            if (first && second) {
                updateDisplay(operate(first, second, op));
                first = null; second = null; op=null;
            }
        } else
        if (isOp) {
            if (first && second) {
                console.log(first, second, op);
                updateDisplay(operate(first, second, op));
                first = null; second = null; op=null;
            }
            op = val;
        } else 
        if (op == null) {
            if (first == null) {
                if (isNum) {
                    first = parseInt(val);
                    updateDisplay(first);
                }
            } else {
                if (val == "back") {
                    first = parseInt(first/10);
                } else {
                    if (isNum) {
                        first *= 10;
                        first += parseInt(val);
                    }
                }
                updateDisplay(first);
            }
        } else if (op) {
            if (isNum) {
                if (second == null) {
                    second = parseInt(val);
                } 
                else {
                    second *= 10;
                    second += parseInt(val);
                }
                updateDisplay(second);
            } else
            if (val == "back") {
                second = parseInt(second/10);
                updateDisplay(second);
            }
        }
    })
})


const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

function operate (x, y, op) {
    switch (op) {
        case "+":
            console.log('here');
            return add(x, y);
            break;
        case "-":
            return sub(x, y);
            break;
        case "*":
            return mul(x, y);
            break;
        case "/":
            return div(x, y);
            break;
    }
}

function updateDisplay(val) {
    let screen = document.querySelector("#screen")
    screen.textContent = val;
}