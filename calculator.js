function getDisplay() {
return document.getElementById('display');
}


function setDisplay(value) {
getDisplay().value = value;
}


function getDisplayValue() {
return getDisplay().value;
}


function clearDisplay() {
setDisplay('0');
}


function appendChar(value) {
let displayValue = getDisplayValue();
if (displayValue === '0') {
replaceDisplay(value);
} else {
addToDisplay(value);
}
}


function addToDisplay(value) {
let display = getDisplay();
display.value += value;
}


function replaceDisplay(value) {
setDisplay(value);
}


function appendDot() {
let displayValue = getDisplayValue();
if (!displayValue.includes('.')) {
addToDisplay('.');
}
}


function deleteLast() {
let displayValue = getDisplayValue();
let newValue = displayValue.slice(0, -1);
if (newValue === '') {
newValue = '0';
}
setDisplay(newValue);
}


function calculateResult() {
let displayValue = getDisplayValue();
try {
let result = eval(displayValue);
setDisplay(result);
} catch {
setDisplay('Error');
}
}