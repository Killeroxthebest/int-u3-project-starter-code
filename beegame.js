let beeButton = document.getElementById("beeButton");
let beeDisplay = document.getElementById("beeDisplay");

let upgradeClicker = document.getElementById("upgradeClicker");
let autoClicker = document.getElementById("autoClicker");


let honey=0;

let multiplier=1;
let multiplierCost=25;

function displayBeeAmt(){
beeDisplay.innerHTML = "You have " + honey + " honey.";
}  
beeButton.addEventListener("click",function(){
    honey+=multiplier;
    displayBeeAmt();
})