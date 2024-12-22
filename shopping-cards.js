const container = document.getElementById('container');
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const body = document.getElementById('body');

body.style.backgroundColor ='white';
body.style.backgroundImage ='none';
container.style.display = 'none' 


let isHomePage = true;
let mainData = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
   mainData = data;
   let newdata = data;
   display(newdata);
})
.catch((error) => {
  console.error("Error fetching data:", error);
  container.innerHTML = '<h1>SORRY THERE WAS AN ERROR IN FETCHING,PLEASE TRY AFTER SOMETIME......<i class="fa-regular fa-face-frown"></i></h1>';
});

function display(newdata){
  if (!isHomePage) {
  container.style.backgroundColor = '#8EC5FC'; 
  container.style.backgroundImage = 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)';
  body.style.backgroundImage = 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)';
  }
    let k = "";
    newdata.forEach((x) => {
      k += `
      <div class="card">
       <div class="image-container">
         <img class="image" src="${x.image}"/>
       </div>
       <div class="content">
          <p class="title">${x.title}</p>
          <h3 class="price">Rs . ${x.price} /-</h3>
       </div> 
        <h4 class="ratingAndCount">${x.rating.rate} <i class="fa-solid fa-star"></i> | ${x.rating.count}</h4>
       <p class="badge">${x.category}</p>
     </div>
    `
    });
    container.innerHTML = k;
}



searchBar.addEventListener('input',()=>{
 
 

  let userInput = searchBar.value.trim();
  if(userInput === ''){
    container.style.display = 'none';
    slidesConatiner.style.display = 'block'
    isHomePage = true;
    body.style.backgroundImage = 'none'
  }else{
    container.style.display ='flex';
  let filteredData = mainData.filter(obj=>obj.category.includes(userInput));
  if(filteredData.length === 0){
    container.innerHTML = '<h1>NO PRODUCTS FOUND......<i class="fa-regular fa-face-frown"></i></h1>';
    body.style.backgroundImage = 'none'
    container.style.backgroundColor = 'white'; 
    container.style.backgroundImage ='';
   }else{
     loadData(()=>{
     display(filteredData);
    })
  }
  isHomePage = false;
}
})


   
const menu = document.getElementById('menu');
menu.addEventListener('change',(e)=>{
  searchBar.value ='';
  container.style.display ='flex';
 
  slidesConatiner.style.display = 'none'
     let u = e.target.value;
     if(u !== 'all'){
  let SelectedData = mainData.filter(obj=>obj.category === u);
  loadData(()=>{
    display(SelectedData);
   })
     }else{
      loadData(()=>{
        display(mainData);
       })
     }
     isHomePage= false;
})



const opp = document.querySelectorAll('.option-btn')
opp.forEach((btn)=>{
  btn.addEventListener('click', (e) =>{
    menu.value = 'reset';
    searchBar.value ='';
    let clicked = btn.dataset.value;
    let XnewData = mainData.filter(obj=>obj.category.toLowerCase()  === clicked.toLowerCase());
    if(XnewData.length === 0){
      container.innerHTML = '<h1>NO PRODUCTS FOUND......<i class="fa-regular fa-face-frown"></i></h1>';
      body.style.backgroundImage = 'none'
      container.style.backgroundColor = 'white'; 
      container.style.backgroundImage ='';
     }else{
      container.style.display = 'flex'
       loadData(()=>{
       display(XnewData);
       })
      }
      isHomePage =false;
    })
  })
    
  
function loadData(fn){
  slidesConatiner.style.display = 'none'
  container.style.backgroundColor ='white';
  container.style.backgroundImage = 'none';
  body.style.backgroundImage = 'none';
  container.innerHTML = `<h2 class="loading"><i class="fa-regular fa-face-smile"></i> fetching your data......  <i class="fa-solid fa-spinner"></i></h2>`;
 setTimeout(()=>{
    fn()
 },1000)
}


const slides = document.getElementById('slides');

const imagesArray = [
               "./slide-1.jpeg",
               "./slide2.jpeg",
               "./slide4.jpeg",
               "./slide5.jpeg"
]

let currentIndex = 0;

const slidesConatiner = document.getElementById('slidesConatiner')

function loadImages(){
       
  slides.innerHTML = '';
  let k ='';
  k+= `<img class="slide" src="${imagesArray[currentIndex]}"/>`
  slides.innerHTML = k;
  currentIndex = (currentIndex + 1) % imagesArray.length;
}

loadImages();


setInterval(loadImages,3000);

const home = document.getElementById('home');

home.addEventListener('click',()=>{
   container.style.display = 'none';
    slidesConatiner.style.display = 'block'
    menu.value = 'reset';
    searchBar.value='';
    isHomePage  = true;
    body.style.backgroundImage = 'none'
})