window.onload = function(){
    console.log("We have loaded!");

    let a_val = document.getElementById('a');
    let b_val = document.getElementById('b');
    let c_val = document.getElementById('c');
}

document.addEventListener("DOMContentLoaded", () =>{
    const first_term = document.getElementById('a');
    const second_term = document.getElementById('b');
    const third_term = document.getElementById('c');
    const x = document.getElementById('x-num');

    const calculate = document.getElementById('calculate');
    const clear = document.getElementById('clear');
    const show = document.getElementById('out')

    calculate.addEventListener("click", () => {
        show.value = quadEquation(first_term.value, second_term.value, third_term.value, x.value);
        const displaying = document.getElementById('Quadratic-Showcase');


        displaying.textContent = "f(x) =" + first_term.value.toString() + "(x)^2 + " + second_term.value.toString() + "(x) + " + third_term.value.toString();
    } 
    );

    clear.addEventListener("click", clearing);

    //dark mode
    let lightdark = document.getElementById("light-dark-toggle");
    lightdark.addEventListener("click", toggleDarkMode);
    if (localStorage.getItem("darkMode") === 'enabled'){
        document.body.classList.add = "darkmode";
    }
} )

function toggleDarkMode(){
    let isDark = document.body.classList.toggle('darkmode');

    localStorage.setItem('darkMode', isDark ? "enabled" : "disabled");
}

function quadEquation(a, b, c, x){

     return ( a*(x)^2 + b*(x) + c );
    
}

function clearing(){

    const first_term = document.getElementById('a');
    const second_term = document.getElementById('b');
    const third_term = document.getElementById('c');
    const x = document.getElementById('x-num');
    const show = document.getElementById('out')
    
    first_term.value = 0;
    second_term.value = 0;
    third_term.value = 0;
    x.value = 0;

}