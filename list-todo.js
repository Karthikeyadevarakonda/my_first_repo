const inputBox = document.getElementById('input-box');
const addBtn = document.getElementById('addBtn');
const todoContainer = document.getElementById('todo-container');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

let totalcount =0;
let completedcount =0;
let incompletecount =0;





addBtn.addEventListener('click',()=>{
   let inputdata = inputBox.value;
   if(inputdata.trim() !== ''){

    let div =  document.createElement('div');
    div.classList.add('div-box');
    let p =  document.createElement('p');
    p.classList.add('p-box');
    let btn =  document.createElement('button');
    btn.classList.add('btn-box');

   p.innerText=inputdata;
   p.addEventListener('click',(e)=>{
       if(e.target.classList.contains('finish')){
        e.target.classList.remove('finish');

       incompletecount++;
       completedcount--;
       }else{
        e.target.classList.add('finish');
        incompletecount--;
       completedcount++;
       }
       three.innerText = "IN-COMPLETE = " +incompletecount;
       two.innerText = "COMPLETE = " +completedcount;
   })
   btn.innerText='DELETE';

   btn.addEventListener('click',(e)=>{
      const div = e.target.parentElement;
      const p = div.querySelector('.p-box');
   if(p.classList.contains('finish')){
      p.remove();
      totalcount--;
      completedcount--;
     
   }else {
      p.remove();
      totalcount--;
      incompletecount--;
   }
   three.innerText = "IN-COMPLETE = " +incompletecount;
       two.innerText = "COMPLETE = " +completedcount;
       one.innerText = "TOTAL = " +totalcount;
    
  })

   div.appendChild(p);
   div.appendChild(btn);
   todoContainer.appendChild(div);
   totalcount++;
   one.innerText = "TOTAL = " +totalcount;
   incompletecount++;
   three.innerText = "IN-COMPLETE = " +incompletecount;


   inputBox.value='';
   }else{
    alert('enter the data to add');
   }
})






// e.target.parentElement.remove();
//      totalcount--;
//      one.innerText = "TOTAL = "+totalcount;