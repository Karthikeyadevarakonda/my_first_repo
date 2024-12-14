

const btn = document.getElementById('btn');
const translated = document.getElementById('translated');
const userinput = document.getElementById('userinput');
btn.addEventListener('click',(e)=>{
   e.preventDefault();
   let newdata = userinput.value.trim();
   if(newdata !== ''){
   let fetched = fetch('https://api.funtranslations.com/translate/yoda.json?text='+newdata)
   .then((res)=>res.json())
   .then((data)=>{
        translated.innerText = data.contents.translated;
        userinput.value ='';
   })
   .catch((err)=> translated.innerText ="ERROS IN FETCHING")
}else{
    alert("ENTER DATA TO CONVERT")
}
})
 