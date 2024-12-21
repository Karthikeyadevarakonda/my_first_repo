const inner = document.getElementById('inner');
let maxwidth = 280;
let duration = 30;
let increment = maxwidth/duration;
let value =0;
setInterval(() => {
  value += increment;
    if(value >= maxwidth){
        value =0;
    }
    inner.style.width = `${value}px`;
  },1000); 
