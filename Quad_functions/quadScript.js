
document.addEventListener("DOMContentLoaded", () =>{
    const first_term = document.getElementById('a');
    const second_term = document.getElementById('b');
    const third_term = document.getElementById('c');
    const x = document.getElementById('x-num');

    const calculate = document.getElementById('calculate');
    const show = document.getElementById('out')

    calculate.addEventListener("click", () => {
        show.value = quadEquation(first_term.value, second_term.value, third_term.value, x.value);
        const displaying = document.getElementById('Quadratic-Showcase');

        displaying.textContent = first_term.value + (x.value) + "^2";
    } 
    );

} )

function quadEquation(a, b, c, x){

     return ( a*(x)^2 + b*(x) + c );
    
}