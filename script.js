var number1, number2;

number1 = document.getElementById('num1').value;
number2 = document.getElementById('num2').value;

const calculate = document.getElementById('calculate');

calculate.addEventListener('click', addition(number1, number2));

//Arithmetic functions
function addition(num1, num2){
    const output = num1 + num2;

    document.getElementById('output').value = output;
    
}

function subtraction(num1, num2){
    const output = num1 - num2;

    document.getElementById('output').value = output;
    
}

function division(num1, num2){
    const output = num1 / num2;

    if (num2 == 0){
        window.alert("Sorry, but you are not allowed to divide by zero, please try again")
    }
    else{
        document.getElementById('output').value = output;
    } 
}

function multiply(num1, num2){
    const output = num1 / num2;

    if (num2 == 0 || num1 == 0){
        console.log("Fun fact but. Anything times zero is zero.");
        document.getElementById('output').value = output;
    }
    else{
        document.getElementById('output').value = output;
        
    } 

}
//end of aritmetic