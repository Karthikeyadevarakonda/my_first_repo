const container = document.getElementById('container');
const btn = document.getElementById('fetch-btn')
const image = document.getElementById('image')


let breeds = fetch('https://dog.ceo/api/breeds/list/all')
.then((res)=> res.json())
.then((data)=>{
   container.innerHTML = '';
  
    const breeds = data.message;
    for(let breed in breeds){
        if(breeds[breed].length === 0){
            let option = document.createElement('option');
            option.innerHTML = breed[0].toUpperCase() + breed.substring(1);
            option.value = breed;
            container.appendChild(option);
        }else{
               for(let subreed of breeds[breed]){
                let option =document.createElement('option');
                option.innerHTML = subreed[0].toUpperCase()+subreed.substring(1) + ' ' + breed[0].toUpperCase() + breed.substring(1);;
                option.value = `${breed} ${subreed}`;
                container.appendChild(option);
               }
            }
   
       }

})
.catch((err)=>console.log("ERROR",err));


btn.addEventListener('click',()=>{
  let inputdata = container.value.trim();
  let newData = inputdata.split(' ').join('/');
  let addedBreedtype = newData;
//   console.log(addedBreedtype);

fetch('https://dog.ceo/api/breed/' + addedBreedtype + '/images/random')
.then((res)=> res.json())
.then((data)=>{
       image.src = data.message;
})
})