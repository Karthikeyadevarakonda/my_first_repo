const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const inputBox = document.getElementById('input-box');

const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearbtn');
const noTodos =document.getElementById('no-todos');

const todoContainer = document.getElementById('todo-container');
const clear = document.getElementById('clear');
let objectsContainer =[];
let mainid = 101;

let canAdd = true;

let totalcount =0;
let completedcount =0;
let incompletecount =0;


function updateCounts(){

    totalcount = objectsContainer.length;
    completedcount = objectsContainer.filter(todo => todo.iscompleted).length;
    incompletecount = totalcount - completedcount;
 
 
     one.innerText = "ALL ( " +totalcount+ " )";
    three.innerText = "IN-PROGRESS ( " +incompletecount+ " )";
    two.innerText = "COMPLETED ( " +completedcount+ " )";
 }

function check(){
if(objectsContainer.length === 0){
   clearBtn.style.display ='none';
   noTodos.style.display = 'block';
   setTimeout(function() {
    noTodos.innerHTML = "<marquee direction='right'><h1><i>NO TODOS YET......<i class='fa-regular fa-face-frown'></i></h1></marquee>";
  }, 100);
}else{
   clearBtn.style.display ='block';
   noTodos.style.display = 'none';
}
}

function completedcheck(){
   const completed = objectsContainer.filter(x=> x.iscompleted)
   clearBtn.style.display =  completed.length > 0 ? 'block' : 'none' ;
   
}

function Incompletedcheck(){
   const incompleted = objectsContainer.filter(x=> !x.iscompleted)
   clearBtn.style.display =  incompleted.length > 0 ? 'block' : 'none' ;

}

addBtn.addEventListener('click',()=>{
   console.log(canAdd);

   if(!canAdd){
      alert('YOU CAN`T ADD FROM HERE GO TO "ALL" SECTION');
      inputBox.value = '';
      return;
   }
    one.style.color='#387ED1'
    let userinput = inputBox.value;

    if(userinput.trim() !== ''){
       
        let eachTodo = {
            id : mainid++,
            text: userinput,
            iscompleted : false
         }
   
        objectsContainer.unshift(eachTodo);
        addtodos(objectsContainer);
        updateCounts()
       inputBox.value='';
        
      }else{
         alert("ENTER data to add");
      }
   
   });
        
function addtodos(TodoList) {
   check();
todoContainer.innerHTML = '';

TodoList.forEach(eachTodo =>{

        let div =  document.createElement('div');
        div.setAttribute('data-id', eachTodo.id);
        div.classList.add('div-box');
  
        let p =  document.createElement('p');
        p.classList.add('p-box');
  
        let btn =  document.createElement('button');
        btn.classList.add('btn-box');
        btn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;

      
        p.innerHTML=`<i class="fa-regular fa-circle"></i>  `+ eachTodo.text;

        if (eachTodo.iscompleted) {

            p.classList.add('finish');
            p.innerHTML=`<i class="fa-regular fa-circle-check"></i>  `+ eachTodo.text;
        }

  
     div.appendChild(p);
     div.appendChild(btn);
     todoContainer.appendChild(div);

       
   btn.addEventListener('click',(e)=>{    

     const TodoId = e.target.closest('div').getAttribute('data-id');
   
    objectsContainer  = objectsContainer.filter(todo => todo.id !== +TodoId);
    addtodos(objectsContainer);
    updateCounts()
 
})

p.addEventListener('click', (e) => {
    
    const TodoId = e.target.parentElement.getAttribute('data-id'); 
    
    objectsContainer = objectsContainer.map(obj => {
       if(obj.id === +TodoId){
       obj.iscompleted = obj.iscompleted ? false : true;
       e.target.classList.toggle('finish',obj.iscompleted);
       }
        return obj;
    })
     sorttodos();
     addtodos(objectsContainer);
     updateCounts()
     
   })
});

}

one.addEventListener('click',()=>{
   canAdd=true;
   addBtn.disabled = false;
   clearBtn.disabled = false;
   one.style.color ='#387ED1'
    two.style.color=''
     three.style.color =''
       addtodos(objectsContainer);
      
   })
two.addEventListener('click',()=>{
   canAdd =false;
   clearBtn.disabled = false;
   two.style.color='#387ED1'
    one.style.color =''
    three.style.color =''
   let twoobjectsContainer  = objectsContainer.filter(todo => todo.iscompleted); 
    addtodos(twoobjectsContainer);
    completedcheck();
   
 });
   let d = true;
three.addEventListener('click',()=>{
   d =false;
 
   canAdd=false;
   three.style.color ='#387ED1'
    one.style.color =''
     two.style.color=''
  let threeobjectsContainer  = objectsContainer.filter(todo => !todo.iscompleted);
  if(!d){
   clearBtn.disabled = true;
  }else{
   clearBtn.disabled = false;
  }
   addtodos(threeobjectsContainer);
   Incompletedcheck();
 });
   
 clearBtn.addEventListener('click',()=>{
    objectsContainer  = objectsContainer.filter(todo => !todo.iscompleted);
     addtodos(objectsContainer);
     updateCounts()
   
 });
 
 function sorttodos() {
     objectsContainer.sort((a, b) => a.iscompleted - b.iscompleted);
     addtodos(objectsContainer);  
 
 }


 clear.addEventListener('click',(e)=>{
   
   if(confirm('are u sure want to delete all todos ?')){
   objectsContainer= [];
   addtodos(objectsContainer);
    two.style.color=''
     one.style.color='#387ED1'
      three.style.color=''
     canAdd = true;
      updateCounts()
   }else{
      alert('delete canceled');
      updateCounts()
   }
 })