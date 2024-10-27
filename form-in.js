const uname = document.getElementById('username');
const password =document.getElementById('psw');
const otp =document.getElementById('otp');
const subBtn =document.getElementById('sub-btn');
const otpBtn=document.getElementById('otp-btn');

subBtn.addEventListener('click',()=>{
    let u = uname.value.trim();
    let p= password.value;
    let o=otp.value;
    if(u ==='' || p ==='' || o ===''){
        alert("PLEASE ENTER UR DETAILS");
        return;
    }
    if(u.length < 8 ){
        alert("USER NAME MUST CONTAINS 8 CHARACATERS");
        uname.focus();
        return;
    }
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passwordPattern.test(p)) {
                alert("Password must be at least 8 characters and an uppercase letter, a lowercase letter, a number, and a special character");
                password.focus();
                return;
            }

    alert("Form submitted successfully!");
    uname.value = '';
    password.value = '';
    otp.value = '';
})
otpBtn.addEventListener('click',()=>{
    let generatedOtp='';
    for(let i=0;i<4;i++){
        generatedOtp += Math.floor(Math.random()*10);
    }
    otp.value = generatedOtp;
})