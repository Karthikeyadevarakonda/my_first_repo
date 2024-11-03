
const btn1 = document.getElementById('btn1');
const container2 = document.getElementById('container-2');
const itemsContainers = document.getElementById('itemsContainer');


const names = document.getElementById('names');
const id = document.getElementById('id');
const course = document.getElementById('course');
const fee = document.getElementById('fee');





let table = document.createElement('table');
table.style.border = '1px solid black'; // Add a border for visibility
table.style.width = '100%';
itemsContainers.appendChild(table);


let FirstcolumnsNames = document.createElement('tr');
FirstcolumnsNames.style.display='none';

let namesArray = ['NAMES','STD_ID','COURSE','FEE'];

namesArray.forEach( eachX =>{
     let column  =  document.createElement('th');
     column.textContent = eachX;
     FirstcolumnsNames.appendChild(column);
});

table.appendChild(FirstcolumnsNames);

btn1.addEventListener('click',()=>{
    let namefeild = names.value.trim();
    let idfeild = id.value.trim();
    let coursefeild = course.value.trim();
    let feefeild = fee.value.trim();

    if(namefeild && idfeild && coursefeild && feefeild !== ''){

        if(FirstcolumnsNames.style.display === 'none'){
            FirstcolumnsNames.style.display='';
        }
     
        let row = table.insertRow();

       let cellname = row.insertCell();
       cellname.textContent = namefeild;
    
       let cellid = row.insertCell();
       cellid.textContent = idfeild;

       let cellcourse = row.insertCell();
       cellcourse.textContent = coursefeild;

       let cellfee = row.insertCell();
       cellfee.textContent = feefeild;

       let deleteCell = row.insertCell();

       let delbtn = document.createElement('button');
       delbtn.innerHTML='<i class="fa-solid fa-trash"></i>';
       delbtn.style.cursor ="pointer";

       deleteCell.appendChild(delbtn);
      deleteCell.classList.add('deletebutton');
      delbtn.addEventListener('click',()=>{

        if(confirm("ARE YOU SURE WANT TO DELETE THIS ROW ?")){
            table.deleteRow(row.rowIndex);
            alert('deleted sucessfuly');

            if(table.rows.length === 1){
            FirstcolumnsNames.style.display = 'none';            }
        }else{
            alert('delete canceled');
        }

        
    });
     
    

    names.value='';
    id.value = '';
    course.value = '';
    fee.value ='';
    }else{
        alert("enter four fields to add");
    }
})