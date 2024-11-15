/**
 * Clock ⌚️
 *
 */

// get reference to element with id `clock`
const clockEl = document.querySelector('#clock');

const tick = () => {
    //get current date and time
    const now = new Date();

    //logga ut det
    // console.log('tick', now.toLocaleTimeString());
    
    //output current time to `#clock` -element
    clockEl.innerText = now.toLocaleTimeString(); 

    if (now.getDay() === 5 && now.getHours() >= 15 && now.getMinutes() >= 44) {
        clockEl.innerText += ' slut för dagen!';
    }
};

//lägger funktionen tick i setInterval samt att det ska uppdateras var 1000 milisekund
setInterval(tick, 500);

//skicka detta så att klockan kommer upp direkt
tick();