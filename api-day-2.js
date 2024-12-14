const container = document.getElementById('container');
const btn = document.getElementById('fetch-btn')



let breeds = fetch('https://dog.ceo/api/breeds/list/all')
.then((res)=> res.json())
.then((data)=>{
   container.innerHTML = '';
  
    const breeds = data.message;
    for(let breed in breeds){
        if(breeds[breed].length === 0){
            let option = document.createElement('option');
            option.innerHTML = breed;
            option.value = breed;
            container.appendChild(option);
        }else{
               for(let subreed of breeds[breed]){
                let option =document.createElement('option');
                option.innerHTML = `${subreed} ${breed}`;
                option.value = `${subreed} ${breed}`;
                container.appendChild(option);
               }
            }
   
       }

})
.catch((err)=>console.log("ERROR",err));