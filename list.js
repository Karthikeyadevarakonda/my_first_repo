const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const clearBtn = document.getElementById('clearbtn');
const clear = document.getElementById('clear');
const noTodos =document.getElementById('no-todos');

const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const TodoContainer = document.getElementById('TodoContainer');
const clearData = document.getElementById('clear-data');
let  objectsContainer = [];


let StringsArray = [];


let mainid = 101;
let canAdd = true;

let totalcount =0;
let completedcount =0;
let incompletecount =0;

check();
const tickSound = new Audio('./click.mp3'); 
const deleteSound = new Audio('./delete.mp3');

function updateCounts(){
  
    totalcount = objectsContainer.length;
    completedcount = objectsContainer.filter(todo => todo.iscompleted).length;
    incompletecount = totalcount - completedcount;
 
 
    one.innerText = "ALL ( " +totalcount+ " )";
    three.innerText = "IN-PROGRESS ( " +incompletecount+ " )";
    two.innerText = "COMPLETED ( " +completedcount+ " )";

    
    localStorage.setItem('tasks',JSON.stringify(objectsContainer));
    
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
    clearBtn.style.display = incompleted.length > 0 ? 'none' : 'block'; 
 }


addBtn.addEventListener('click',handleTodos)
inputBox.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
       handleTodos();
    }
 });
 
    
  function handleTodos(){
   let errorSound = new Audio('./error.mp3')
    if(!canAdd){
        errorSound.currentTime = 0;
        errorSound.play();
        setTimeout(()=>{
            alert('YOU CAN`T ADD FROM HERE GO TO "ALL" SECTION');
        },200) 
        inputBox.value = '';
        return;
     }
    one.style.color='red'
    let inputdata = inputBox.value;
 
    if(inputdata.trim() !== ''){
 
         let eachTodo = {
          id : mainid++,
          text: inputdata,
          iscompleted : false
       }
       objectsContainer.unshift(eachTodo);

       if(!checking(eachTodo.text)){
       
        StringsArray.push(eachTodo.text.trim().replace(/\s{2,}/g, ' '));
        console.log(StringsArray)
    }else{
       alert("NAME ALREDY EXIST");
    }      
   
    inputBox.value='';

     addtodos(objectsContainer);
     tickSound.currentTime =0;
     tickSound.play();
     updateCounts();
     localStorage.setItem('tasks',JSON.stringify(objectsContainer));
      
    }else{
       alert("ENTER data to add");
    }
 
    inputBox.value='';
 
}


function checking(name){

    let usertext = name.trim().replace(/\s{2,}/g, ' ');

   
  return StringsArray.some(obj=>{
    
       let res = obj.localeCompare(usertext, undefined, { sensitivity: 'base' });
    
       if(res === 0){

        let y = obj[0];
        let x = usertext[0];

          if(y >='A' && y <='Z' && x>='a' && x<='z'){
            return false;
          }
          return true;
        }
        return false;
    })  
}

function addtodos(TodoList){
    check();
   TodoContainer.innerHTML = '';

   TodoList.forEach((eachTodo,index)=>{  
    let k = `
    <div class="eachTodo"> 
    <p class="todo-text ${eachTodo.iscompleted ? 'finish' : 'notfinish'}"><i class="${eachTodo.iscompleted ? 'fa-regular fa-circle-check' : 'fa-regular fa-circle'}"></i> ${eachTodo.text}</p>
    <button class="editBtn" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="deleteBtn" data-index="${index}"><i class="fa-regular fa-trash-can"></i></button>
    </div>
    `
    TodoContainer.innerHTML += k;
   })
   attachDeleteListener();
   attachEditListener();
   attachCompleteListener();
  
}


function attachCompleteListener(){
    let completed = document.querySelectorAll('.todo-text');
    completed.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
          objectsContainer[idx].iscompleted = !objectsContainer[idx].iscompleted;
          tickSound.currentTime = 0;
          tickSound.play();
          sorttodos();
          updateCounts();
          localStorage.setItem('tasks',JSON.stringify(objectsContainer));
       })
   })
}

function sorttodos(){
    objectsContainer.sort((a, b) => a.iscompleted - b.iscompleted);
    addtodos(objectsContainer);
}


function attachDeleteListener(){

let deleteButtonList = document.querySelectorAll('.deleteBtn');

deleteButtonList.forEach((btn,idx)=>{
        btn.addEventListener('click',()=>{
           
              deleteTodo(idx);
              deleteSound.currentTime = 0;
              deleteSound.play();
              canAdd=true;
              three.style.color =''
              one.style.color ='red'
              two.style.color=''

        })
})

}

function deleteTodo(idx){
    let removeName = objectsContainer[idx].text;
    StringsArray  =  StringsArray.filter(eachName=> eachName !== removeName)
     objectsContainer.splice(idx,1);
     addtodos(objectsContainer);
     updateCounts();
     localStorage.setItem('tasks',JSON.stringify(objectsContainer));
}


function attachEditListener(){
    let EditButtonList = document.querySelectorAll('.editBtn');
    EditButtonList.forEach((btn,idx)=>{
        btn.addEventListener('click',()=>{
            console.log(idx)
              EditItems(idx);
        })
})

}
function EditItems(idx){
    const todotext =  document.querySelectorAll('.todo-text')[idx];
    let originalValue = todotext.innerText;
    let input = document.createElement('input');
    input.classList.add('editInput');
    input.type = 'text';
    input.value = originalValue;
    todotext.replaceWith(input);
    input.focus();
    input.addEventListener('blur',()=>{
        if(input.value.trim() === ''){
            objectsContainer[idx].text = originalValue;
        }else{
            objectsContainer[idx].text = input.value.trim();
        }
        addtodos(objectsContainer);
    })
    
input.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        if(input.value.trim() === ''){
            objectsContainer[idx].text = originalValue;
        }else{
            objectsContainer[idx].text = input.value.trim();
        }
        addtodos(objectsContainer);
    }
})
}



clear.addEventListener('click',()=>{
    if(objectsContainer.length > 0){
       if(confirm('are u sure want to delete all todos ?')){
          objectsContainer= [];
          StringsArray =[]; 
          addtodos(objectsContainer);
          deleteSound.currentTime = 0;
          deleteSound.play();
      
          updateCounts()

          two.style.color=''
          one.style.color='red'
          three.style.color=''
          canAdd = true;
          
       }else{
          alert('delete canceled');
          updateCounts()
       }
    }else{
       alert('no todos to delete..!')
    }
    inputBox.value='';
    localStorage.setItem('tasks',JSON.stringify(objectsContainer));
})


clearBtn.addEventListener('click',()=>{
    objectsContainer  = objectsContainer.filter(todo => !todo.iscompleted);

    addtodos(objectsContainer);
    deleteSound.currentTime = 0;
    deleteSound.play();
     updateCounts()
    
    localStorage.setItem('tasks',JSON.stringify(objectsContainer));


    one.style.color='red';
    three.style.color='';
    two.style.color='';
    canAdd=true;
 });
 

 
one.addEventListener('click',()=>{  
    canAdd=true;
    addBtn.disabled = false;
    clearBtn.disabled = false;
    one.style.color ='red'
    two.style.color=''
     three.style.color =''
    addtodos(objectsContainer);
    tickSound.currentTime =0;
    tickSound.play();
       
    })
 two.addEventListener('click',()=>{
    canAdd =false;
    clearBtn.disabled = false;
    two.style.color='red'
    one.style.color =''
    three.style.color =''
  let container = objectsContainer.filter(todo => todo.iscompleted); 
     addtodos(container);
     tickSound.currentTime =0;
     tickSound.play();
     completedcheck();
    
  });
 
 three.addEventListener('click',()=>{
    canAdd=false;
    three.style.color ='red'
    one.style.color =''
     two.style.color=''
    let container =  objectsContainer.filter(todo => !todo.iscompleted);
    addtodos(container);
    tickSound.currentTime =0;
    tickSound.play();
    Incompletedcheck();
  });
    



  let tasks = JSON.parse(localStorage.getItem('tasks'));

  if(tasks !== null){
    objectsContainer = tasks;
    addtodos(tasks);
  }else{
    objectsContainer=[];
  }
 
  
