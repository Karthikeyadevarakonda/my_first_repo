const login = document.getElementById('login');
const logout = document.getElementById('logout');
const form = document.getElementById('form');
const uname = document.getElementById('uname');
const pwd = document.getElementById('pwd');
const title = document.getElementById('title');

login.addEventListener('click',(e)=>{
    e.preventDefault();
    let userinput = uname.value.trim();
    let pwdinput  = pwd.value.trim();

    if(userinput !=='' && pwdinput !== ''){
    title.innerText = userinput;
    uname.value='';
    pwd.value='';
    form.style.display ='none';
    logout.style.display ='inline';
    localStorage.setItem('task',userinput);
    }else{
        alert('enter valid username and password');
    }
   
})
logout.addEventListener('click',()=>{
    title.innerText = 'GUEST';
    form.style.display ='block';
    logout.style.display ='none';
    localStorage.removeItem('task');
})

let task = localStorage.getItem('task');

if(task !== null){
    title.innerText = task;
    form.style.display ='none';
    logout.style.display ='inline';
}else{
    title.innerText = 'GUEST';
    form.style.display ='block';
    logout.style.display ='none';
}