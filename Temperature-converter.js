const convertC=document.getElementById('convertC');
const convertF=document.getElementById('convertF');
const convert=document.getElementById('convert');
const errordiv=document.getElementById('errordiv');

convert.addEventListener('click',()=>{
     
    errordiv.innerText='';


if(convertC.value.trim() !== ''  && convertF.value.trim() === ''){

    let NewcovertC = parseFloat(convertC.value);

    

    if(!isNaN(NewcovertC)){
          convertF.value =+(NewcovertC * 9/5 + 32)+" °F";
          convertF.readOnly = true;
          convertC.readOnly = false;
          errordiv.innerText='';
    }else{
        errordiv.innerText=   convertC.value+ "  is not a number";
        errordiv.style.color= "red";
        convertF.readOnly = true;
        convertF.value='';
    }

}else if(convertF.value.trim() !== '' && convertC.value.trim() === ''){

    let NewcovertF = parseFloat(convertF.value);

   

    if(!isNaN(NewcovertF)){
        convertC.value = +((NewcovertF -32) * 5/9)+" °C";
        convertC.readOnly = true;
        convertF.readOnly = false;
        errordiv.innerText='';
     }else{
      errordiv.innerText=   convertF.value+ "  is not a number";
      errordiv.style.color= "red";
      convertC.readOnly = true;
      convertC.value='';
    }

}else{
    errordiv.innerText="Enter the value in any one of the box to convert ..!"
    errordiv.style.color="red";
}

});




convertC.addEventListener('input',()=>{
   if(convertC.value.trim() === ''){
    convertF.value = '';
    errordiv.innerText='';
    convertF.readOnly = false;
   }
})


convertF.addEventListener('input',()=>{
    if(convertF.value.trim() === ''){
        convertC.value = '';
        errordiv.innerText='';
        convertC.readOnly = false;
       }
})
