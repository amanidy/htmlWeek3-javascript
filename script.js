//Declaring number
var a = 10;
//Declaring string
var city = "Nairobi";
//Declaring boolean
var isNull = true;


// Add function
function add(a, b) {
    return a + b;
}
add();
console.log(add(5, 3));


// Subract function
function subtract(a, b) {
    return a - b;
}
subtract();
console.log(subtract(19, 6));

// Multiply function
function multiply(a, b) {
    return a * b;
}
multiply();
console.log(multiply(25, 6));

// Divide function
function divide(a, b) {
    return a / b;
}
divide();
console.log(divide(12, 4));

const title = document.getElementById("title");
const btn = document.getElementById("changeText")

btn.addEventListener('click', () => {
    
    title.textContent = "Hey Champ,you have done it!";
    title.style.color = "blue";
    title.style.fontSize = "20px";
});

const changeColorBtn = document.getElementById("changeColorBtn");

changeColorBtn.addEventListener('click', () => {
    let changeColor = document.getElementById("changeColor").value;
    document.body.style.backgroundColor = changeColor;
});

const showText = document.getElementById("showText");
const showTextBtn = document.getElementById("showTextBtn");

showTextBtn.addEventListener('click', () => {
   if (showText.classList.contains('hidden')) {
                showText.classList.remove('hidden');
                showText.textContent = 'Hide Secret Message';
            } else {
                showText.classList.add('hidden');
                showText.textContent = 'Show Secret Message';
    } 
    showText.style.color = "Red";
});