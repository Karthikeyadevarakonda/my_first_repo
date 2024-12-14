const container = document.getElementById("container");

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => {
   
    let newdata = data.users;
    
    let k = "";

    newdata.forEach((x) => {
      k += `<div class="card">
       <div class="left-div">
        <img class="image" src=${x.image}/>
        <p class="name">${x.lastName} ${x.firstName}</p>
       </div>
    <div class="right-div">
        <p>${x.username}</p>
        <p>${x.address.city}</p>
        <p class="mail">${x.email}</p>
    </div>
     <div class="gender">
        <p>${x.gender}</p>
     </div>
       <div class="department">
         <p>${x.company.department}</p>
       </div>
     </div>
    `
    });
    container.innerHTML = k;
  });
