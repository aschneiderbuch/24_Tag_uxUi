console.log("test")


/* 
to do

wenn a butten_burgerMenue gedrückt wird








*/

let burgerMenue___display = document.getElementById("burgerMenue___display");

let button___burgerMenue = document.getElementById("button___burgerMenue");

button___burgerMenue.addEventListener("click", toggleBurgerMenue);

function toggleBurgerMenue() {

/* 
Option 0 - geht - klappt nur einblenden

    burgerMenue___display.style.display = ("flex");
 */

  /* 
  Option 1 -  geht nicht

burgerMenue___display.classList.toggle("js_toggle_button_burgerMenue___display");
*/

    /*
    Option 2 -  geht -  klappt top
    */
    if (burgerMenue___display.style.display === "none") {
        burgerMenue___display.style.display = "flex";
    } else {
        burgerMenue___display.style.display = "none";
    }
     
    console.log("Funktion toogleBurgerMenue wird aufgerufen");


}