const convertC=document.getElementById('convertC');
const convertF=document.getElementById('convertF');
// const convert=document.getElementById('convert');
const errordiv=document.getElementById('errordiv');
const img = document.getElementById('image');

convertC.addEventListener('input',()=>{
     
    errordiv.innerText='';
    
    if (convertC.value.trim() !== '' && convertF.value.trim() !== '') {
        return;
    }

if(convertC.value.trim() !== ''  && convertF.value.trim() === ''){

    let NewcovertC = parseFloat(convertC.value);

    

    if(!isNaN(NewcovertC)){
         let withoutdeg = (NewcovertC * 9/5 + 32).toFixed(2);
          convertF.value = withoutdeg+" °F";
          errordiv.innerText='';
            if(withoutdeg <= 32){
                console.log("Setting cold image");
                img.src='./cold.gif';
               
            }else if(withoutdeg > 32 && withoutdeg <=50 ){
                console.log("Setting cool image");
                img.src='./cool.gif';
            }else{
                console.log("Setting warm image");
                img.src='./warm.gif';
            }
    }else{
        errordiv.innerText=   convertC.value+ "  is not a number";
        errordiv.style.color= "red";
        convertF.value='';
    }
}else{
    errordiv.innerText="Enter the value in any one of the box to convert ..!"
    errordiv.style.color="red";
}

});



convertF.addEventListener('input',()=>{
   errordiv.innerText='';
    
    if (convertC.value.trim() !== '' && convertF.value.trim() !== '') {
        return;
    }
    console.log("Raw Fahrenheit input value:", convertF.value);

 if(convertF.value.trim() !== '' && convertC.value.trim() === ''){

    let NewcovertF = parseFloat(convertF.value.trim());
    console.log("Fahrenheit input:", NewcovertF);

   

    if(!isNaN(NewcovertF)){
        let withoutdegF = ((NewcovertF - 32) * 5 / 9).toFixed(2);
        convertC.value = withoutdegF+" °C";
        errordiv.innerText='';

        withoutdegF = parseFloat(withoutdegF); 
        console.log("Converted Celsius:", withoutdegF);

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
   }
})


convertF.addEventListener('input',()=>{
    if(convertF.value.trim() === ''){
        convertC.value = '';
        errordiv.innerText='';
        img.src='';
       }
})
