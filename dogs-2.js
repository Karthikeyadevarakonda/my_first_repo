const inputBox = document.getElementById('inputBox');
const menu = document.getElementById('menu');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

fetch('https://dog.ceo/api/breed/hound/list')
.then((res)=>res.json())
.then((data)=>{

    let newdata = data.message;
    let k ='';
    newdata.forEach(breed => {
        k +=`<Option value=${breed}>${breed[0].toUpperCase() + breed.substring(1)}</Option>` 
    });
   menu.innerHTML = k;
})

    btn.addEventListener('click',()=>{

        let Z;
        let count = inputBox.value.trim();
        console.log(count);
         if(+count !== 0){
            Z = +count;
         }else{
            Z=15;
         }

        let U = menu.value;
        console.log(U);
        fetch('https://dog.ceo/api/breed/hound/'+U+'/images/random/'+Z)
             .then((res)=>res.json())
             .then((data)=>{
              let list ='';
            
               let array = data.message;
             
               array.forEach(x=>{
        
                     list += 
                    `<div class="card">
                         <img class="image" src="${x}" />
                         <p class="name">${U[0].toUpperCase() + U.substring(1)}</p>
                    </div>`
               })
                 loadData(()=>{
                    container.innerHTML = list;
                 })
              
             })
    })


function loadData(fn){
     container.innerHTML = `<h2 class="loading"><i class="fa-regular fa-face-smile"></i> fetching your data......  <i class="fa-solid fa-spinner"></i></h2>`;
    setTimeout(()=>{
       fn()
    },3000)
}