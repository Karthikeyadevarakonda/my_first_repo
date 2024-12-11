function getMovieName(name,fn){
    console.log("Fetching the details....");
    setTimeout(()=>{
        fn({show1:name,
            show2:'AGENT',
            show3:'SAALAR'
        },2000)
    })
}

function getTimings(name,fn){
    let timings =['10:45','12:45','2:45','8:00'];
    console.log(`FETCHING The timimgs of ${name.show1} movie.....`)
    setTimeout(()=>{
          fn(timings);
    },2000)
}

function getSeats(timimgs,fn){
    let seats = ['A1','A2','B1','C2'];
    console.log(`FETCHING SEATS AT ${timimgs[0]}....`)
    setTimeout(()=>{
        fn(seats);
  },2000)
}

function getConfirmation(status, fn) {
    console.log("Processing booking confirmation...");
    setTimeout(() => {
        if (status) {
            console.log("Booking confirmed successfully!");
            fn(true);
        } else {
            console.log("Booking failed. Please try again.");
            fn(false);
        }
    }, 2000);
}

getMovieName('pushpa',(A)=>{
     console.log("THE MOVIE SELECTED :" +A.show1);
      getTimings(A,(B)=>{
        console.log(B+" ");
          console.log(`${B[0]} show is Selected`);
         getSeats(B,(C)=>{
            console.log("THE AVALAIBLE SEATS ARE :")
            console.log(C+" ");
            console.log('The selected seats is '+C[0],C[1]);
            getConfirmation(true,(D)=>{
                if(D){
                console.log("Enjoy your movie...!")
                }
            })
        })
    })
})