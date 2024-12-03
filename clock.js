const seconds = document.getElementById('seconds')
const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')


let i=0;
let timerid;


startBtn.addEventListener('click',()=>{
    startBtn.disabled = true;
    timerid = setInterval(()=>{
        seconds.innerText = i < 10 ? '0' + i : i;
        i++;
        if(i === 60){
            i = 0;
        }
    },1000);

})

stopBtn.addEventListener('click',()=>{
    clearInterval(timerid);
    startBtn.disabled = false;
})