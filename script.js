var number1 = 0, number2 = 0;
window.onload = function(){
    console.log('Loaded');
}

document.addEventListener('DOMContentLoaded', () =>{   
    const calculate = document.getElementById('C');
    let mode = "addition";

    number1 = document.getElementById('num1');
    number2 = document.getElementById('num2');

    //Selecting which mode we are in
    const addMode = document.getElementById('add');
    const subtractMode = document.getElementById('subtract');
    const divisionMode = document.getElementById('divide');
    const multiplyMode = document.getElementById('times')

    addMode.addEventListener("click", ()=> {
        mode = "addition";
        let symbol = document.getElementById('SubSn');
        symbol.style.display = 'block';
    });
    subtractMode.addEventListener("click", ()=> {
        mode = "subtraction"
        let symbol = document.getElementById('SubSn');
        symbol.style.display = 'block';
        
        
    });
    divisionMode.addEventListener("click", ()=> {
        mode = "division";
        let symbol = document.getElementById('SubSn');
        symbol.style.display = 'block';
    });
    multiplyMode.addEventListener("click", ()=> {
        mode = "times";
        let symbol = document.getElementById('SubSn');
        symbol.style.display = 'block';
    })



    calculate.addEventListener("click", () =>{ //If they click the button to calculate what is needed
        var numVal1 = Number(number1.value);
        var numVal2 = Number(number2.value);

        if (mode == "addition"){
            addition(numVal1, numVal2);
        }
        else if(mode == "subtraction"){
            subtraction(numVal1, numVal2);
        }
            
        else if (mode == "division"){
            division(numVal1, numVal2);
        }
        else if (mode == "times"){
            multiply(numVal1, numVal2);
        }
       
        
    });


}
);

//Arithmetic functions
function addition(num1, num2){
    let output = num1 + num2;

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
    const output = num1 * num2;

    if (num2 == 0 || num1 == 0){
        console.log("Fun fact but. Anything times zero is zero.");
        document.getElementById('output').value = output;
    }
    else{
        document.getElementById('output').value = output;
        
    } 

}
//end of aritmetic