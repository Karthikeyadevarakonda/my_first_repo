const model = document.getElementById('model');

// const one = document.getElementById('one')
// const two = document.getElementById('two')
const three = document.getElementById('three')

const btns = document.querySelectorAll('.close');
  for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',()=>{
        model.style.display='none';
  })
}
setTimeout(()=>{
    model.style.display = 'block';

},3000);