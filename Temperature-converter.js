const convertC=document.getElementById('convertC');
const convertF=document.getElementById('convertF');
const convert=document.getElementById('convert');
const errordiv=document.getElementById('errordiv');
const img = document.getElementById('image');

convert.addEventListener('click',()=>{
     
    errordiv.innerText='';
    
    if (convertC.value.trim() !== '' && convertF.value.trim() !== '') {
        return;
    }

if(convertC.value.trim() !== ''  && convertF.value.trim() === ''){

    let NewcovertC = parseFloat(convertC.value);

    

    if(!isNaN(NewcovertC)){
         let withoutdeg = NewcovertC * 9/5 + 32;
          convertF.value = withoutdeg+" °F";
          convertF.readOnly = true;
          convertC.readOnly = false;
          errordiv.innerText='';
            if(withoutdeg <= 32){
                img.src='./cold.gif';
            }else if(withoutdeg > 32 && withoutdeg <=50 ){
                img.src='./cool.gif';
            }else{
                img.src='./warm.gif';
            }
    }else{
        errordiv.innerText=   convertC.value+ "  is not a number";
        errordiv.style.color= "red";
        convertF.readOnly = true;
        convertF.value='';
    }

}else if(convertF.value.trim() !== '' && convertC.value.trim() === ''){

    let NewcovertF = parseFloat(convertF.value);

   

    if(!isNaN(NewcovertF)){
        let withoutdegF = (NewcovertF -32) * 5/9;
        convertC.value = withoutdegF+" °C";
        convertC.readOnly = true;
        convertF.readOnly = false;
        errordiv.innerText='';
        if(withoutdegF <= 0){
            img.src='./cold.gif';
        }else if(withoutdegF >= 1 && withoutdegF <=15 ){
            img.src='./cool.gif';
        }else{
            img.src='./warm.gif';
        }
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
    img.src='';
    convertF.readOnly = false;
   }
})


convertF.addEventListener('input',()=>{
    if(convertF.value.trim() === ''){
        convertC.value = '';
        errordiv.innerText='';
        img.src='';
        convertC.readOnly = false;
       }
})
