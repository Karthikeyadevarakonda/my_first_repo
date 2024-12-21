const slider = document.getElementById('custom');
const timeDisplay = document.getElementById('timeDisplay');
const otpBox = document.getElementById('otpBox');
const copyElement = document.getElementById('copy');
const copied = document.getElementById('copied');
const popUp = document.getElementById('popUp');
const copyElement2 = document.getElementById('copy-2')
const copied2 =document.getElementById('copied2')




function popIn(duration = 900){
    popUp.style.display = 'block';
    popUp.style.animation= `box-1-slide-in  ${duration}ms cubic-bezier(0.2, 1, 1, 1) forwards`;
}

function hidePopUp(duration = 900){
    popUp.style.animation= `box-1-slide-out  ${duration}ms cubic-bezier(0.2, 1, 1, 1) forwards`;
    setTimeout(()=>{
        popUp.style.display = 'none';
    },duration)
}

setTimeout(() => {
    popIn();
    setTimeout(hidePopUp, 4000);
}, 3000);

function generatedOtps(){
    let generatedOtp='';
        for(let i=0;i<4;i++){
            generatedOtp += Math.floor(Math.random()*10);
        }
    otpBox.value = generatedOtp;
}
generatedOtps();


copyElement.addEventListener('click', () => {
        navigator.clipboard.writeText(otpBox.value)
        copied.style.display = 'block';
       setTimeout(()=>{
        copied.style.display = 'none';
       },1500)
      });
copyElement2.addEventListener('click', () => {
        navigator.clipboard.writeText(otpBox.value)
        copied2.style.display = 'block';
      });
const text = "OTP Code Generator....!";
const textContainer = document.getElementById("text");
let index = 0;

    function typeText() {
      if (index < text.length) {
        textContainer.textContent += text[index];
        index++;
        setTimeout(typeText, 120); 
      }
    }

 typeText();

const inner = document.getElementById('inner');
let maxwidth = 280;
let duration = 30;
let increment = maxwidth/duration;
let valu =0;
let value = 30;


function combiningBothSliderAndTimer() {
   let currentTime = duration;
   setInterval(()=>{
    currentTime--;
    if(currentTime <= 0){
        currentTime = duration;
        generatedOtps();
    }
    timeDisplay.textContent = currentTime;

    const width = ((duration - currentTime) / duration) * maxwidth;
    inner.style.width = `${width}px`
   },1000)
}

combiningBothSliderAndTimer();