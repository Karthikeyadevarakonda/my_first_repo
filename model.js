const model = document.getElementById('model');
const body = document.getElementById('gradient');

const btns = document.querySelectorAll('.close');
  for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',()=>{

        model.style.animation = 'box-1-slide-out 5000ms cubic-bezier(0.2, 1, 1, 1) forwards';
        setTimeout(()=>{

        model.style.display='none';

        body.style.filter = 'none';
        },900);
    });
}
 
setTimeout(()=>{
    model.style.display = 'block';
    model.style.animation= 'box-1-slide-in 900ms cubic-bezier(0.2, 1, 1, 1) forwards';
    body.style.filter = 'blur(4px)';
},3000);