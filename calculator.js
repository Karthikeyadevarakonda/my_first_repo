const btnTwozeroes = document.getElementById('btn00');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const ClearBtn = document.getElementById('ClearBtn');
const DivBtn = document.getElementById('DivBtn');
const MulBtn = document.getElementById('MulBtn');
const btnSub = document.getElementById('btnSub');
const btnAdd = document.getElementById('btnAdd');
const backspace = document.getElementById('backspace');
const btnequalto = document.getElementById('btnequalto');
const modBtn = document.getElementById('modBtn');
const dot = document.getElementById('dot');
const power = document.getElementById('power');
const oneByX = document.getElementById('oneByX');
const inputBox = document.getElementById('inputBox');



btn0.addEventListener('click',()=>{
   let input =  inputBox.value ;
   if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
    inputBox.value = "0";
   }else{
    inputBox.value = input +"0";
   }
  
})
btn1.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "1";
       }else{
        inputBox.value = input +"1";
       }
 })
 btn2.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "2";
       }else{
        inputBox.value = input +"2";
       }
 })
 btn3.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "3";
       }else{
        inputBox.value = input +"3";
       }
 })
 btn4.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "4";
       }else{
        inputBox.value = input +"4";
       }
 })
 btn5.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "5";
       }else{
        inputBox.value = input +"5";
       }
 })
 btn6.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "6";
       }else{
        inputBox.value = input +"6";
       }
 })
 btn7.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "7";
       }else{
        inputBox.value = input +"7";
       }
 })
 btn8.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "8";
       }else{
        inputBox.value = input +"8";
       }
 })
 btn9.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "9";
       }else{
        inputBox.value = input +"9";
       }
 })
 btnTwozeroes.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity"|| input === "-Infinity"){
        inputBox.value = "00";
       }else{
        inputBox.value = input +"00";
       }
 })
 btnAdd.addEventListener('click',()=>{
    let input =  inputBox.value ;
    let n = input.length;
    let y = input.slice(n-1,n);
      if(y !== '+' && y !== '-' && y !== '*' && y !== '/' && y !== '%' && y !== '.' && y !== '' && y !== 'y' && y !== 'N'&& y !== '!'){
            inputBox.value = input +"+";
      }
 })
 btnSub.addEventListener('click',()=>{
    let input =  inputBox.value ;
    let n = input.length;
    let y = input.slice(n-1,n);
    if(y !== '+' && y !== '-' && y !== '*' && y !== '/' && y !== '%' && y !== '.' && y !== '' && y !== 'y' && y !== 'N'&& y !== '!'){
        inputBox.value = input +"-";
      }
 })
 MulBtn.addEventListener('click',()=>{
    let input =  inputBox.value ;
    let n = input.length;
    let y = input.slice(n-1,n);
    if(y !== '+' && y !== '-' && y !== '*' && y !== '/' && y !== '%' && y !== '.' && y !== '' && y !== 'y' && y !== 'N'&& y !== '!'){
        inputBox.value = input +"*";
      }
 })
 DivBtn.addEventListener('click',()=>{
    let input =  inputBox.value ;
    let n = input.length;
    let y = input.slice(n-1,n);
    if(y !== '+' && y !== '-' && y !== '*' && y !== '/' && y !== '%' && y !== '.' && y !== '' && y !== 'y' && y !== 'N'&& y !== '!'){
        inputBox.value = input +"/";
      }
 })
 dot.addEventListener('click',()=>{
    let input =  inputBox.value ;
    let n = input.length;
    let y = input.slice(n-1,n);
    if(y !== '+' && y !== '-' && y !== '*' && y !== '/' && y !== '%' && y !== '.' && y !== '' && y !== 'y' && y !== 'N'&& y !== '!'){
        inputBox.value = input +".";
      }
 })
 modBtn.addEventListener('click',()=>{
    let input =  inputBox.value ;
    let n = input.length;
    let y = input.slice(n-1,n);
    if(y !== '+' && y !== '-' && y !== '*' && y !== '/' && y !== '%' && y !== '.' && y !== '' && y !== 'y' && y !== 'N'&& y !== '!'){
        inputBox.value = input +"%";
      }
 })
 power.addEventListener('click',()=>{
    let input =  inputBox.value ;
    let n = input.length;
    let y = input.slice(n-1,n);
    if(y !== '+' && y !== '-' && y !== '*' && y !== '/' && y !== '%' && y !== '.' && y !== '' && y !== 'y' && y !== 'N'&& y !== '!'){
        inputBox.value = eval(input*input);
      }
 })
 oneByX.addEventListener('click',()=>{
    let input =  inputBox.value ;
    let n = input.length;
    let y = input.slice(n-1,n);
    if(y !== '+' && y !== '-' && y !== '*' && y !== '/' && y !== '%' && y !== '.' && y !== '' && y !== 'y' && y !== 'N'&& y !== '!'){
        inputBox.value = eval(1/input);
      }
 })
 ClearBtn.addEventListener('click',()=>{
    inputBox.value = '';
 })
 btnequalto.addEventListener('click',()=>{
    let res = inputBox.value;
  
    if(res !== ''){
    let finalRes = eval(res);
    if(finalRes.toString() === 'NaN'){
        inputBox.value = "CANNOT DIVIDE BY 0 !";
        return;
    }else{
    inputBox.value = finalRes;
    }
}
 })
 backspace.addEventListener('click',()=>{
    let input =  inputBox.value ;
    if(input === "CANNOT DIVIDE BY 0 !" || input === "NaN" || input === "Infinity" || input === "-Infinity"){
        inputBox.value = '';
    }else{
        let y = input.slice(0,-1);
        inputBox.value = y;
    }
    
 })



