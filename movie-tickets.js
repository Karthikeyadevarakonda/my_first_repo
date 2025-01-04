const container = document.getElementById('container');

const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
 
const SeatsPerRow = 12;

const maxSeatsCanSelect = 6;

// let selectedSeats = 1;

const seatMap = new Map();

let eliteAppend = false;
let economyAppend = false;

let allSeatsSelected =[];


const seatLayout = document.createElement('div');
seatLayout.classList.add('seatLayout');



function clearSelected(){
    allSeatsSelected =[];
    seatMap.forEach((seatElement)=>{
        seatElement.classList.remove('selected')
        seatElement.innerText = '';
        // selectedSeats = 0;
        goldSelectedSeatsCount = 0;
        eliteSelectedSeatsCount = 0;
        economySelectedSeatsCount = 0;
        goldTotalAmount = 0;
        eliteTotalAmount = 0;
        economyTotalAmount =0;
        updateSeatNumber();
    })
}
function updateSeatNumber(){
    const seatsSelected = Array.from(seatMap.values())
    .filter(seatelement =>seatelement.classList.contains('selected'))
    .map(seatelement=>seatelement.dataset.seatId);
       console.log(seatsSelected);

    seatsSelected.forEach((seatId,index)=>{
        const seatElement = seatMap.get(seatId);
        seatElement.innerText = index+1;
    
    });
    allSeatsSelected = seatsSelected;
    costCalculation(seatsSelected);
    return seatsSelected;
}


let totalAmount = 0;

let goldSelectedSeatsCount = 0;
let eliteSelectedSeatsCount = 0;
let economySelectedSeatsCount = 0;
let goldTotalAmount = 0;
let eliteTotalAmount = 0;
let economyTotalAmount =0;


function costCalculation(seats){
      
  totalAmount = 0;
  goldSelectedSeatsCount = 0;
  eliteSelectedSeatsCount = 0
  economySelectedSeatsCount =
  goldTotalAmount = 0;
  eliteTotalAmount = 0;
  economyTotalAmount =0;

  
    seats.forEach(seat=>{
        if(seat.includes('A')){
            goldSelectedSeatsCount++;
            goldTotalAmount = goldSelectedSeatsCount*295;
            totalAmount += 295;
        }else if(['B' ,'C' ,'D' , 'E' ,'F' ,'G' , 'H' ,'I' , 'J'].includes(seat.charAt(0))){
            eliteSelectedSeatsCount++;
            eliteTotalAmount = eliteSelectedSeatsCount*177;
            totalAmount += 177;
        }else{
            economySelectedSeatsCount++;
            economyTotalAmount = economySelectedSeatsCount * 145;
            totalAmount += 145;
        }
    })
}



function SeatSelection(eachSeat,seatId){


           
eachSeat.addEventListener('click',()=>{
           
    if(eachSeat.classList.contains('selected')){
        eachSeat.classList.remove('selected');
        eachSeat.innerText = '';
        allSeatsSelected=allSeatsSelected.filter(seat => seat !== seatId);// ikada manam edina seat ni diselect chesethe ah id tho manam array lo kuda store chesi una seat ni remove chestham
        
    }else if(allSeatsSelected.length < maxSeatsCanSelect){
        eachSeat.classList.add('selected');
        allSeatsSelected.push(seatId);//ikada ah select chesina seat add chesthunam
    }else{
        alert('You can select only 6 seats')
    }


  let use =  updateSeatNumber();
  
const screenBar = document.getElementById('screen-bar');

if(use.length > 0){
    screenBar.style.height = "220px";
    screenBar.classList.add('middle-line');
    container.style.marginBottom = "100px"

    let pricingContainer = document.querySelector('.prizing');
    
   if(!pricingContainer){
    pricingContainer = document.createElement('div');
    pricingContainer.classList.add('prizing');
    screenBar.appendChild(pricingContainer);
   }
    
   pricingContainer.innerHTML = '';


    const selectedSeatsCount = use.length;

    pricingContainer.innerHTML = `<div class="prizing">
               <div class="prize">
                   <h3 class="cost"><i class="fa-solid fa-indian-rupee-sign"></i>${totalAmount}</h3>
                   <h5 class="cost-tag costTagGold">GOLD : Ticket ${goldSelectedSeatsCount} <i class="fa-solid fa-x"></i> <i class="fa-solid fa-indian-rupee-sign used-at-prizing-2"></i>${goldTotalAmount}</h5>
                    <h5 class="cost-tag costTagElite">ELITE : Ticket ${eliteSelectedSeatsCount} <i class="fa-solid fa-x"></i> <i class="fa-solid fa-indian-rupee-sign used-at-prizing-2"></i>${eliteTotalAmount}</h5>
                     <h5 class="cost-tag costTagEconomy">ECONOMY : Ticket ${economySelectedSeatsCount} <i class="fa-solid fa-x"></i> <i class="fa-solid fa-indian-rupee-sign used-at-prizing-2"></i>${economyTotalAmount}</h5>
                </div>
                <div class="book-btn">
                   <button class="book">BOOK TICKETS</button>
                </div>
        </div>
         `
}else{
    screenBar.style.height = "100px"
    screenBar.classList.remove('middle-line')
    container.style.marginBottom = "0px"

    let pricingContainer = document.querySelector('.prizing');
    if(pricingContainer){
        pricingContainer.innerHTML = '';

    }
}

  });
}



rows.forEach((seat)=>{
    
       let row = document.createElement('div');
       if(seat !== 'A'){
           row.classList.add('row');
       }
       if(seat === 'A'){
           row.classList.add('AthRow')
       }
           const label = document.createElement('div');
           label.innerText = seat;
           label.classList.add('label')

           row.appendChild(label);

           const left = document.createElement('div');
           left.classList.add('section','left');
           
           
           const right = document.createElement('div');
           right.classList.add('section','right');


           if(seat === 'B' && !eliteAppend){
            const elite = document.createElement('div');
            elite.innerHTML = `<h3 class="elite">177 ELITE : <i class="fa-solid fa-indian-rupee-sign"></i>177</h3>`
            seatLayout.appendChild(elite); 
            eliteAppend = true; 
          }
          
          if(seat === 'K' && !economyAppend){
            const economy = document.createElement('div');
            economy.innerHTML = `<h3 class="economy">145 ECONOMY : <i class="fa-solid fa-indian-rupee-sign"></i>145</h3>`
            seatLayout.appendChild(economy); 
            economyAppend = true;
          }
            
    const isFromGtoJ = ['G','H','I','J'].includes(seat)
    const isFromLtoP = ['L','M','N','O','P'].includes(seat)
         
    const isA = ['A'].includes(seat)
    const isZ = ['Z'].includes(seat)


    let seatNumberCounter = 1;

           for(let i=1;i<=SeatsPerRow;i++){
            const eachSeat = document.createElement('div');
            eachSeat.classList.add('eachSeat');
           

        if(isA && i<=2){
                eachSeat.classList.add('emptyFirstRow');
        }else if(isZ && i<=3){
                eachSeat.classList.add('emptyFirstRow');
        }else if(isFromLtoP && i<=4){
                eachSeat.classList.add('empty');
        }else if(isFromGtoJ && i<=2){
            eachSeat.classList.add('empty');
        }else{
            const seatId = `${seat}${seatNumberCounter}`;

            eachSeat.setAttribute('data-seat-id',seatId);

            seatNumberCounter++;

            seatMap.set(seatId,eachSeat)

            SeatSelection(eachSeat,seatId);
        }
           
            left.appendChild(eachSeat);

           
}

for(let i=1;i<=SeatsPerRow;i++){
    const eachSeat = document.createElement('div');
    eachSeat.classList.add('eachSeat');
   

    if(isA && (i > SeatsPerRow-4)){
        eachSeat.classList.add('emptyFirstRow');
    }else if(isZ && (i > SeatsPerRow-4)){
        eachSeat.classList.add('emptyFirstRow');
    }else if(isFromLtoP && (i > SeatsPerRow-4)){
        eachSeat.classList.add('empty');
    }else if(isFromGtoJ && (i > SeatsPerRow-2)){
        eachSeat.classList.add('empty');
    }else{
        const seatId = `${seat}${seatNumberCounter++}`;
        
        eachSeat.setAttribute('data-seat-id',seatId);
    
        seatMap.set(seatId,eachSeat)
        SeatSelection(eachSeat,seatId);
    }


   right.appendChild(eachSeat);
   
}

row.appendChild(left)
row.appendChild(right)
seatLayout.appendChild(row)

if(seat === 'A'){
    row.classList.add('top-row');
  }

  if(seat === 'K'){
    row.classList.add('bottom-row');
  }

  if(seat === 'Q'){
    row.classList.add('footer-row');
  }

});

container.appendChild(seatLayout);

const bookedSucess = document.getElementById('booked-sucessfull');
const screenBar = document.getElementById('screen-bar');

screenBar.addEventListener('click',(e)=>{
    if(e.target && e.target.classList.contains('book')){
        console.log("CLICKED");

        bookedSucess.innerHTML = '';

  let content = '';
      content+=`<div class="conformation">
                    <button class="back-btn">&lt BACK</button>
                    <h1 class="title-bo0k-sucess">BOOKING SUCESSFULL</h1>
                    <h3 class="seatsAll">YOUR SEATS: ${allSeatsSelected.join(", ")}<h3>
                    <h1 class="displayPrice">TOTAL PRICE : ${totalAmount}</h1>
                    <img class="ticks" src="./tickets.jpeg">
                    `

          bookedSucess.innerHTML = content;

        bookedSucess.style.display = 'block';

        
    }
    container.style.filter ="blur(4px)";
    container.style.pointerEvents = "none";
    navBar.style.filter="blur(4px)";
    navBar.style.pointerEvents = "none";
    screenBar.style.filter ="blur(4px)";
    body.style.position = "fixed";


    screenBar.style.height = "100px"
    screenBar.classList.remove('middle-line')
    container.style.marginBottom = "0px"
    let pricingContainer = document.querySelector('.prizing');
    clearSelected();
   
    if(pricingContainer){
        pricingContainer.innerHTML = '';
        
    }
})

const body = document.getElementById('body');
const navBar = document.getElementById('nav-bar');


bookedSucess.addEventListener('click',(e)=>{

    if(e.target && e.target.classList.contains('back-btn')){
        console.log("Back button clicked");
        bookedSucess.style.display='none'
        clearSelected();
        container.style.filter ="none";
        navBar.style.filter="none";
        screenBar.style.filter ="none";

        container.style.pointerEvents = "auto";
       
        navBar.style.pointerEvents = "auto";
        
        body.style.position = "static";
    
    }
})
