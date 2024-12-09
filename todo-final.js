const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const inputBox = document.getElementById('input-box');

const addBtn = document.getElementById('addBtn');
// const filterBtn = document.getElementById('filterbtn');
const clearBtn = document.getElementById('clearbtn');

const todoContainer = document.getElementById('todo-container');

let objectsContainer =[];
let mainid = 101;

let totalcount =0;
let completedcount =0;
let incompletecount =0;


function updateCounts(){

    totalcount = objectsContainer.length;
    completedcount = objectsContainer.filter(todo => todo.iscompleted).length;
    incompletecount = totalcount - completedcount;
 
 
     one.innerText = "TOTAL = " +totalcount;
    three.innerText = "IN-COMPLETE = " +incompletecount;
    two.innerText = "COMPLETE = " +completedcount;
 }



addBtn.addEventListener('click',()=>{

    let userinput = inputBox.value;

    if(userinput.trim() !== ''){
       
        let eachTodo = {
            id : mainid++,
            text: userinput,
            iscompleted : false
         }
   
      objectsContainer.push(eachTodo);
      
       addtodos(eachTodo);

       inputBox.value='';

       updateCounts();
        
      }else{
         alert("ENTER data to add");
      }
   
    
   
   });
        
   function addtodos(eachTodo){
       
       

        let div =  document.createElement('div');
        div.setAttribute('data-id', eachTodo.id);
        div.classList.add('div-box');
  
        let p =  document.createElement('p');
        p.classList.add('p-box');
  
        let btn =  document.createElement('button');
        btn.classList.add('btn-box');
        btn.innerText='DELETE';
      
        p.innerText=eachTodo.text;

  
     div.appendChild(p);
     div.appendChild(btn);
     todoContainer.appendChild(div);

       
   btn.addEventListener('click',(e)=>{    
    
    todoContainer.innerHTML = '';

     let TodoId = e.target.parentElement.getAttribute('data-id');
   
    objectsContainer  = objectsContainer.filter(todo => todo.id !== +TodoId);

    updateCounts();
 
})


p.addEventListener('click', (e) => {
    const TodoId = e.target.parentElement.getAttribute('data-id'); 
    console.log(objectsContainer);
    objectsContainer = objectsContainer.map(obj => {
       if(obj.id === +TodoId){
       obj.iscompleted = !obj.iscompleted; 
       }
       
        return obj;
       
    })
    console.log(objectsContainer);
    // objectsContainer.forEach(addtodos);
})
   }

clearBtn.addEventListener('click',()=>{

   objectsContainer  = objectsContainer.filter(todo => !todo.iscompleted);

   todoContainer.innerHTML = '';

   objectsContainer.forEach(addtodos);

    updateCounts();
});



   function sorttodos(){
     todoContainer.innerHTML = '';
     objectsContainer.sort((a,b)=>a.iscompleted - b.iscompleted);
     objectsContainer.forEach(addtodos);
   }