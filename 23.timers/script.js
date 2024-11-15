/**
 * Timers
 *
 */

const btnScareEl = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');


const getRandomNumber = (max = 10) => {
    return Math.floor(Math.random() * max) + 1;
};

//få en random delay
//detta sättet får man bara en delay varje gång man refreshar sidan istället för varje gång man trycker på 
//knappen, det är istället bättre att lägga denna i event listener nedan
// const delay = getRandomNumber() * 1000;


btnScareEl.addEventListener('click', () => {
    //hide button
    btnScareEl.classList.add('hide');//lägger till classen hide som har styling i css med display none

    //show ghost without timer:
    // ghostEl.classList.remove('hide');

    //får en delay varje gång användaren trycker på knappen
    const delay = getRandomNumber() * 1000;


    //show ghost with timer
    console.log('Starting timer for delay: ', delay);
    setTimeout(() => {
        //kommer utföras efter runt 5 sek
        console.log('SCARED!');

        ghostEl.classList.remove('hide');//första argumentet, man säger vad den ska göra, sen sätter min timer

        //ta fram knappen och ta bort spöket 
        setTimeout(() => { // denna sätts igång 5sekunder efter att knappen trycks
            console.log('showing button again');
            ghostEl.classList.add('hide');
            btnScareEl.classList.remove('hide');
        }, 4000 ); //denna kommer gå 4 sekunder efter att man har fått upp spöket
    }, delay);//får ett random nummer som den har i delay


    //ta fram knappen igen med en timer
    //detta fungerar inte så bra, nestla det istället
    /* setTimeout(() => {
        console.log('showing button again');
        ghostEl.classList.add('hide');
        btnScareEl.classList.remove('hide');
    }, 4000 );
     */
});