const secoundsarea = document.querySelector("#secounds");
const minutsarea = document.querySelector("#minuts");
const hoursarea = document.querySelector("#hours");
const daysarea = document.querySelector("#days");

let countersecounds = 1;
let counterminuts = 0;
let counterhours = 0;
let counterdays = 0;

function secounds()
{
        setInterval(() =>
        {
            secoundsarea.innerHTML=countersecounds;
            countersecounds++
            if(countersecounds==60)
            {
                countersecounds=1;
                counterminuts++;
                minutes();
            }
        }, 1000);
}
secounds();
function minutes()
{
      minutsarea.innerHTML=counterminuts;
      if(counterminuts==60)
      {
          counterminuts=0;
          counterhours++;
          hours();
      }
}
function hours()
{
    hoursarea.innerHTML=counterhours;
    if(counterhours==24)
    {
        counterhours=0;
        counterdays++;
        days();
    }
}
function days()
{
    
}