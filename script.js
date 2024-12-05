var number1, number2;
window.onload = function(){
    console.log('Loaded');

    let number1 = document.getElementById("num1");
    let number2 = document.getElementById("num2");

    number1.value = sessionStorage.getItem("Num1");
    number2.value = sessionStorage.getItem("Num2");
}

function toggleDarkMode(){
    let isDark = document.body.classList.toggle('darkmode');

    localStorage.setItem('darkMode', isDark ? "enabled" : "disabled");
}

document.addEventListener('DOMContentLoaded', () =>{ 
    var toggle = false;  
    const calculate = document.getElementById('C');
    let mode = "addition";

    number1 = document.getElementById('num1');
    number2 = document.getElementById('num2');

    //dark mode
    let lightdark = document.getElementById("light-dark-toggle");
    lightdark.addEventListener("click", toggleDarkMode);
    if (localStorage.getItem("darkMode") === 'enabled'){
        document.body.classList.add = "darkmode";
    }
    

    //Selecting which mode we are in
    const addMode = document.getElementById('add');
    const subtractMode = document.getElementById('subtract');
    const divisionMode = document.getElementById('divide');
    const multiplyMode = document.getElementById('times')

    addMode.addEventListener("click", ()=> {
        
        let symbol = document.getElementById('addSn');
        if (toggle == false){
            symbol.style.transform = 'scale(1.5)';
            toggle = true;
            mode = "addition";
        }
        else{
            symbol.style.transform = 'scale(1)';
            toggle = false;
            mode = "";
        }
    });

    subtractMode.addEventListener("click", ()=> {
        
        let symbol = document.getElementById('SubSn');
        if (toggle == false){
            symbol.style.transform = 'scale(1.5)';
            toggle = true;
            mode = "subtraction"
        }
        else{
            symbol.style.transform = 'scale(1)';
            toggle = false;
            mode = "";
        }    
    });

    divisionMode.addEventListener("click", ()=> {
        
        let symbol = document.getElementById('DivSn');
        if (toggle == false){
            symbol.style.transform = 'scale(1.5)';
            toggle = true;
            mode = "division";
        }
        else{
            symbol.style.transform = 'scale(1)';
            toggle = false;
            mode = "";
        }
    });

    multiplyMode.addEventListener("click", ()=> {
        
        let symbol = document.getElementById('MulSn');
        if (toggle == false){
            symbol.style.transform = 'scale(1.5)';
            toggle = true;
            mode = "times";
        }
        else{
            symbol.style.transform = 'scale(1)';
            toggle = false;
            mode = "";
        }
    });



    calculate.addEventListener("click", () =>{ //If they click the button to calculate what is needed
        var numVal1 = Number(number1.value);
        var numVal2 = Number(number2.value);

        sessionStorage.setItem("Num1", number1.value);
        sessionStorage.setItem("Num2", number2.value);

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