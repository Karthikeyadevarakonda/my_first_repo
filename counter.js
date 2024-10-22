const counter= document.getElementById('counter');
const incrementer = document.getElementById('incrementer');
const decrementer = document.getElementById('decrementer');

let count=0;

incrementer.addEventListener('click',()=>{
    count++;
    counter.innerText=count < 10 ? "0" + count : count;
});
decrementer.addEventListener('click',()=>{
    
    count > 0 ? count-- : "00";
    counter.innerText=count !== -1 && count <10  ?  "0" + count : count;
    
});