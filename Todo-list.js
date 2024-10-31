const TodoBox = document.getElementById('Todo-box');
const btn1 = document.getElementById('btn1');
const container2 = document.getElementById('container-2');
const itemsContainers = document.getElementById('itemsContainer');

const cost = document.getElementById('price');
const date = document.getElementById('date');








btn1.addEventListener('click',()=>{
    let Tododata = TodoBox.value.trim();
    let TodoCost = cost.value.trim();
    let Tododate = date.value.trim();


    if(Tododata && TodoCost && Tododate !== ''){

    let itemContainer = document.createElement('div');
    let infoContainer = document.createElement('div');
    let p = document.createElement('p');
    let delbtn = document.createElement('p');

    let costP = document.createElement('p');
    let dateP = document.createElement('p');

    costP.innerText = TodoCost;
    dateP.innerText = Tododate;

    p.innerText = Tododata;
    delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>'; 

    p.classList.add('p-items');
    delbtn.classList.add('btn-items');
    costP.classList.add('costP');
    dateP.classList.add('dateP');

    itemContainer.classList.add('box');
    infoContainer.classList.add('info-container');

    

    infoContainer.appendChild(p);
    infoContainer.appendChild(costP);
    infoContainer.appendChild(dateP);
      
    p.addEventListener('click',()=>{
        p.classList.toggle('finish');
        costP.classList.toggle('finish');
        dateP.classList.toggle('finish');
    })
    costP.addEventListener('click',()=>{
        p.classList.toggle('finish');
        costP.classList.toggle('finish');
        dateP.classList.toggle('finish');
    })
    dateP.addEventListener('click',()=>{
        p.classList.toggle('finish');
        costP.classList.toggle('finish');
        dateP.classList.toggle('finish');
    })

    delbtn.addEventListener('click',()=>{
        itemsContainers.removeChild(itemContainer);
    })
     
    
    itemContainer.appendChild(infoContainer);
    
    itemContainer.appendChild(delbtn);

    itemsContainers.appendChild(itemContainer);

    TodoBox.value='';
    cost.value = '';
    date.value = '';
    }
})