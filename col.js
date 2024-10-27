
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');

const colorCode1 = document.getElementById('colorCode1');
const colorCode2 = document.getElementById('colorCode2');
const colorCode3 = document.getElementById('colorCode3');
const colorCode4 = document.getElementById('colorCode4');
const colorCode5 = document.getElementById('colorCode5');

window.addEventListener('keydown',(e)=>{


    

    if(e.key === ' ' || e.key === 32){

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);


    const r1 = Math.floor(Math.random() * 256);
    const g1 = Math.floor(Math.random() * 256);
    const b1 = Math.floor(Math.random() * 256);

    const r2 = Math.floor(Math.random() * 256);
    const g2 = Math.floor(Math.random() * 256);
    const b2 = Math.floor(Math.random() * 256);

    const r3 = Math.floor(Math.random() * 256);
    const g3 = Math.floor(Math.random() * 256);
    const b3 = Math.floor(Math.random() * 256);

    const r4 = Math.floor(Math.random() * 256);
    const g4 = Math.floor(Math.random() * 256);
    const b4 = Math.floor(Math.random() * 256);

        box1.style.backgroundColor=`rgb(${r},${g},${b})`;
        box2.style.backgroundColor=`rgb(${r1},${g1},${b1})`; 
        box3.style.backgroundColor=`rgb(${r2},${g2},${b2})`; 
        box4.style.backgroundColor=`rgb(${r3},${g3},${b3})`; 
        box5.style.backgroundColor=`rgb(${r4},${g4},${b4})`; 
        box1.style.backgroundColor=`rgb(${r},${g},${b})`;
        
        colorCode1.innerText = `${r},${g},${b}`;
        colorCode2.innerText = `${r},${g},${b}`;
        colorCode3.innerText = `${r},${g},${b}`;
        colorCode4.innerText = `${r},${g},${b}`;
        colorCode5.innerText = `${r},${g},${b}`;
       
    }else{
        alert("click space bar to change colours");
    }
})