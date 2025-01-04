const container = document.getElementById('container');

const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
 
const SeatsPerRow = 12;

const maxSeatsCanSelect = 6;

let selectedSeats = 1;

const seatMap = new Map();

let eliteAppend = false;
let economyAppend = false;

const seatLayout = document.createElement('div');
seatLayout.classList.add('seatLayout');





function updateSeatNumber(seatId){
       console.log(seatId)
       console.log(seatMap)
}



function SeatSelection(eachSeat,seatId){


           
eachSeat.addEventListener('click',()=>{
           
    if(eachSeat.classList.contains('selected')){
        eachSeat.classList.remove('selected');
        eachSeat.innerText = '';
        selectedSeats--;
        
    }else if(selectedSeats <= maxSeatsCanSelect){
        eachSeat.classList.add('selected');
        eachSeat.innerText = selectedSeats;
        selectedSeats++;
    }else{
        alert('You can select only 6 seats')
    }


    updateSeatNumber(seatId);

  });
}








rows.forEach((seat ,index)=>{

    
    
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

            // eachSeat.innerText = seatNumberCounter;
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