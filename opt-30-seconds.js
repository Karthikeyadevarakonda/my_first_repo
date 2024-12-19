const slider = document.getElementById('custom');
const timeDisplay = document.getElementById('timeDisplay');
const otpBox = document.getElementById('otpBox');
const copyElement = document.getElementById('copy');
const copied = document.getElementById('copied');
const popUp = document.getElementById('popUp');
const copyElement2 = document.getElementById('copy-2')
const copied2 =document.getElementById('copied2')


function generatedOtps(){
    let generatedOtp='';
        for(let i=0;i<4;i++){
            generatedOtp += Math.floor(Math.random()*10);
        }
    otpBox.value = generatedOtp;
}
generatedOtps();

let value =30;
    setInterval(() => {
        value = (value - 1 + 31) % 31;
        slider.value = value;     
        timeDisplay.textContent = value;
        if(value === 0){
            generatedOtps();
        }
      },1000); 

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

setTimeout(()=>{
        popUp.style.display = 'block';
        popUp.style.animation= 'box-1-slide-in 900ms cubic-bezier(0.2, 1, 1, 1) forwards';
        setTimeout(()=>{
            popUp.style.display = 'none';
        },6000)
    },3000);
    
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