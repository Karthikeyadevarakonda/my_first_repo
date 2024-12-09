const inputBox = document.getElementById('input-box');
const addBtn = document.getElementById('addBtn');
const todoContainer = document.getElementById('todo-container');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

let totalcount =0;
let completedcount =0;
let incompletecount =0;


let todoinput = '';
let mainid = 101;

let objectsContainer =[];



addBtn.addEventListener('click',(e)=>{
   let inputdata = inputBox.value;
 
   if(inputdata.trim() !== ''){

        let eachTodo = {
         id : mainid++,
         text: inputdata,
         iscompleted : false
      }

   objectsContainer.push(eachTodo);
    
    addtodos(eachTodo);
     
   }else{
      alert("ENTER data to add");
   }

   inputBox.value='';

})
      

  
   

function sortedtodos(){

   todoContainer.innerHTML= '';

   objectsContainer.sort((a,b) => b.iscompleted - a.iscompleted);

   objectsContainer.forEach(addtodos);
}


   function addtodos(eachTodo){


      let div =  document.createElement('div');
      div.classList.add('div-box');

      let p =  document.createElement('p');
      p.classList.add('p-box');

      let btn =  document.createElement('button');
      btn.classList.add('btn-box');
    
      p.innerText=eachTodo.text;

      btn.innerText='DELETE';
      
      // p.eachTodo = eachTodo;

   div.appendChild(p);
   div.appendChild(btn);
   todoContainer.appendChild(div);

   totalcount++;
   incompletecount++;
   
   updateCounts()


   btn.addEventListener('click',(e)=>{     //delete
      const div = e.target.parentElement;
      const todoID = p.eachTodo.id;
      objectsContainer = objectsContainer.filter(todo => todo.id !== eachTodo.id);

      div.remove();

      updateCounts();
   
  })



  p.addEventListener('click',(e)=>{

   if(e.target.classList.contains('finish')){
    e.target.classList.remove('finish');
    e.target.eachTodo.iscompleted = false;
   incompletecount++;
   completedcount--;
   }else{
    e.target.classList.add('finish');
    e.target.eachTodo.iscompleted = true;
    incompletecount--;
    completedcount++;
   }

   updateCounts();

   sortedtodos();
 
   
})
}


function updateCounts(){

   totalcount = objectsContainer.length;
   completedcount = objectsContainer.filter(todo => todo.iscompleted).length;
   incompletecount = totalcount - completedcount;


    one.innerText = "TOTAL = " +totalcount;
   three.innerText = "IN-COMPLETE = " +incompletecount;
   two.innerText = "COMPLETE = " +completedcount;
}


 
