// const title = document.getElementById('title');
// title.style.color='blue';
// title.style.backgroundColor="black";
// title.style.width="130px";
// title.style.border='5px solid red';
// title.style.padding="2px 3px"

// const main = document.getElementById('main');
// main.style.width="100%";
// // main.style.backgroundColor='red';
// main.style.paddingLeft='546px'
// main.style.transform = 'translateY(90px)';


const title = document.getElementById('title');
const para1 = document.getElementById('para1');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const body = document.getElementById('body');

let flag = false;
function modeChanger(){
    if(flag === false){
    body.style.color='white';
    body.style.backgroundColor='black';
    btn1.innerText="DARK-MODE";
    title.style.color="red"
    flag=true;
    }
     else{
    body.style.color='black';
    body.style.backgroundColor='white';
    btn1.innerText="LIGHT-MODE";
    title.style.color="black"
    flag=false;
     }
}
btn1.addEventListener('click',modeChanger);






