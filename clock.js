const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')
const ampm = document.getElementById('am-pm')


const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')
const resetBtn = document.getElementById('reset-btn')

let i=1;
let j=0;
let k=0;
let timerid;


startBtn.addEventListener('click',()=>{
    startBtn.disabled = true;
    resetBtn.disabled = true;
    timerid = setInterval(()=>{
        c.innerText = i < 10 ? '0' + i : i;
        i++;
        if(i === 60){
            i = 0;
            min();
        }
    },1000);

})

let min = function(){ 
    j++;
    if(j === 60){
        j = 0;
        hour();
    }
    b.innerText= j < 10 ? '0' + j : j;
}

let hour = function(){ 
    k++;
    if(k === 12){
        ampm.innerText = ampm.innerText === "AM" ? "PM" : "AM";
    }
    else if(k === 13){
        k=1;
    }
    a.innerText= k < 10 ? '0' + k : k;
}

stopBtn.addEventListener('click',()=>{
    clearInterval(timerid);
    startBtn.disabled = false;
    resetBtn.disabled = false;
})
resetBtn.addEventListener('click',()=>{
      a.innerText="00"
      b.innerText="00"
      c.innerText="00"
    i=1;
    j=0;
    k=0;
    ampm.innerText = "AM";
})