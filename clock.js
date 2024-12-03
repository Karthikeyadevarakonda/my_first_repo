const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')

const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')
const resetBtn = document.getElementById('reset-btn')

let i=0;
let j=0;
let k=0;
let timerid;


startBtn.addEventListener('click',()=>{
    startBtn.disabled = true;
    resetBtn.disabled = true;
    timerid = setInterval(()=>{
        seconds.innerText = i < 10 ? '0' + i : i;
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
    minutes.innerText= j < 10 ? '0' + j : j;
}

let hour = function(){ 
    k++;
    if(k === 12){
        k = 0;
    }
    hours.innerText= k < 10 ? '0' + k : k;
}

stopBtn.addEventListener('click',()=>{
    clearInterval(timerid);
    startBtn.disabled = false;
    resetBtn.disabled = false;
})
resetBtn.addEventListener('click',()=>{
      seconds.innerText="00"
      minutes.innerText="00"
      hours.innerText="00"
    i=1;
    j=0;
    k=0;
})