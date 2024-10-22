document.getElementById('ageform').addEventListener('submit',function(event){
    event.preventDefault();

const age = parseInt(document.getElementById('ageInput').value);
   if(age > 18){
    alert("YOUR ELIGIBLE FOR VOTE");
   }else{
    alert("YOUR NOT ELIGIBLE FOR VOTE");
   }
   });

